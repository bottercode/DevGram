import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Nav/navbar";
import Home from "./components/home/Home";
import Profile from "./components/profile/profile";
import Message from "./components/Message/Message";

import { localStorage_key } from "./components/Register/Register";
import { useEffect, useState } from "react";

function App() {
  const [isLogged, setisLogged] = useState(true);

  const onSetisLoggedState = () => {
    setisLogged(true);
  };
  useEffect(() => {
    const data = localStorage.getItem(localStorage_key);
    console.log(data);
    if (data) {
      console.log(JSON.parse(data));
      setisLogged(true);
    } else {
      console.log("NOT AUTHORIZED");
      setisLogged(false);
    }
  }, []);

  return (
    <div className="h-full">
      <Navbar />
      <BrowserRouter>
        <Switch>
          {!isLogged && (
            <Route path="/login" exact>
              <Login />
            </Route>
          )}
          {!isLogged && (
            <Route path="/Register" exact>
              <Register onsetislogged={onSetisLoggedState} />
            </Route>
          )}
          {isLogged && (
            <Route path="/" exact>
              <Home />
            </Route>
          )}
          {isLogged && (
            <Route path="/profile" exact>
              <Profile
                name="Saurabh"
                email="abcd.com"
                bio="I'm a software engineer based in San Francisco."
              />
            </Route>
          )}
          <Route path="*">
            {isLogged ? <Redirect to="/" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
