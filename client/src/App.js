import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Nav/navbar";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Message from "./components/message/Chat";
import socketIO from "socket.io-client";
import { localStorage_key } from "./components/Register/Register";
import { useEffect, useState } from "react";

const socket = socketIO.connect("http://localhost:5000")

function App() {
  const [isLogged, setisLogged] = useState(false);

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
    <BrowserRouter>
      <Switch>
        <Route path="/chat" exact>
          <Message socket={socket} />
        </Route>
        
        {isLogged && (
          <Route path="/" exact>
            <Navbar />
          </Route>
        )}

        {!isLogged && (
          <Route path="/register" exact>
            <Register onsetislogged={onSetisLoggedState} />
          </Route>
        )}

        {!isLogged && (
          <Route path="/login" exact>
            <Login />
          </Route>
        )}

        <Route path="/home" exact>
          <Home />
        </Route>

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
          {isLogged ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
