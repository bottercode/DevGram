import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Route path="/register" element={<Register />} />
    </BrowserRouter>
   
  </div>
  );
}

export default App;
