import { BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
  <div className="App">
    <Router>
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
    </Router>
  </div>
  );
}

export default App;
