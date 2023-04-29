const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const server = require("http").createServer(app); 
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const dotenv = require("dotenv").config();
const cors = require("cors");
const socket = require("socket.io");
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("DB connection Successful!");
  })
  .catch((err) => {
    console.log("Error while connecting", err.message);
  });

app.use(cors({
  origin: "*",
  credentials: true,
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const senderSocket = onlineUsers.get(data.from);
    if (senderSocket) {
      socket.to(senderSocket).emit("msg-recieve", data.msg);
    }
  });  
});
