import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Nav/navbar";
import Home from "./components/home/Home";
import Profile from "./components/profile/profile";
function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/Register" exact>
            <Register />
          </Route>
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>  
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
