const express = require("express");
const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose")
const app = express();
const dotenv = require("dotenv").config()
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB connection Successfull!")
}).catch((err) => {
    console.log("Error while connecting", err.message);
})

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`)
})
