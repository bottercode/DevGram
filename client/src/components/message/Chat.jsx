import React from 'react';
import classes from './chat.module.css';
import { useHistory } from 'react-router-dom';
import { io } from "socket.io-client";
import { useRef } from 'react';
import { host } from "../../APIRoutes";
import { useState } from 'react';
import { useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import Welcome from '../welcome/Welcome';
import ChatContainer from '../chatContainer/ChatContainer';

const Chat = () => {
  const history = useHistory();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentuser, setcurrentuser] = useState(undefined);

  useEffect(() => {
    const func = async () => {
      if (!localStorage.getItem("Pro-Gram")) {
        history.push("/login");
      } else {
        const data = await JSON.parse(localStorage.getItem("Pro-Gram")).username;
        setcurrentuser(data);
      }
    }
    func();
  }, [history]);

  useEffect(() => {
    if (currentuser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentuser._id);
    }
  }, [currentuser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <div className={classes.chat}>
      <div className={classes.ChatContainer}>
        <Contacts contacts={contacts} changeChat={handleChatChange} />
        {currentuser === undefined ? (
          <Welcome />
        ) : (
          <ChatContainer username={currentuser} currentChat={currentChat} socket={socket.current} />
        )}
      </div>
    </div>
  );
}

export default Chat;
