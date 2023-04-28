import React from 'react'
import classes from './chat.module.css'
import { useHistory } from 'react-router-dom'
import { io } from "socket.io-client";
import { useRef } from 'react';
import { host } from "../../APIRoutes"
import { useState } from 'react';
import { useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import Welcome from '../welcome/Welcome';
import ChatContainer from '../chatContainer/ChatContainer';


const Chat = () => {
  const history = useHistory();
  const socket = useRef();
  const [contacts, setContacts] = useState([])
  const [currentChat, setCurrentChat] = useState(undefined)
  const [username, setUsername] = useState(undefined)

  useEffect(() => {
    const func = async() => {
      if(!localStorage.getItem("Pro-Gram")){
        history.push("/login")
      }
      else {
        const data =  await JSON.parse(localStorage.getItem("Pro-Gram")).username
        setUsername(data)
      }
    }
    func();
  }, [history])

  useEffect(() => {
    if (username) {
      socket.current = io(host);
      socket.current.emit("add-user", username._id);
    }
  }, [username]);

  useEffect(() => {
    const userdata = JSON.parse(
      localStorage.getItem("Pro-Gram")
    );
    setUsername(userdata.username);
  },[])

  
  const handleChatChange = (chat) =>{
    setCurrentChat(chat);
  } 

  return (
    <div className={classes.chat}>
      <div className={classes.ChatContainer}>
        <Contacts contacts={contacts} changeChat={handleChatChange}/>
        {username === undefined ? (
          <Welcome />
        ):(
          <ChatContainer username={username} currentChat={currentChat} socket={socket} />
        )}
      </div>
    </div>
  )
}

export default Chat