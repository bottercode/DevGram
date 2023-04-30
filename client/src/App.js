import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Nav/navbar";
import Home from "./components/home/Home";
import socketIO from "socket.io-client";
import { localStorage_key } from "./components/Register/Register";
import { useEffect, useState } from "react";
import Chat from "./components/message/Chat";
import Profile from "./components/profile/Profile"; 
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
  const skills=["javascript","NodeJs","MongoDB"]
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chat" exact>
          <Chat socket={socket} />
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

        {isLogged && (
          <Route path="/profile" exact>
            <Profile 
             skills={skills}
             name="Saurabh" 
             location="India" 
             bio="I am a full stack developer"/>
          </Route>
        )}

        <Route path="/home" exact>
          <Navbar />
          <Home />
        </Route>

       
{/* 
        <Route path="*">
          {isLogged ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
