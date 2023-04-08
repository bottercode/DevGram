import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </BrowserRouter>
  </div>
  );
}

export default App;
