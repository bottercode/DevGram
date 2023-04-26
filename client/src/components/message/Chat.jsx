import React from 'react'
import classes from './chat.module.css'
import { useHistory } from 'react-router-dom'
import { useRef } from 'react';
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
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const func = async() => {
      if(!localStorage.getItem("Pro-Gram")){
        history.push("/login")
      }
      else{
        setCurrentUser(
          await JSON.parse(localStorage.getItem("Pro-Gram"))
        )
      }
    }
    func();
  }, [history])

  const handleChatChange = (chat) =>{
    setCurrentChat(chat);
  } 

  return (
    <div className={classes.chat}>
      <div className={classes.ChatContainer}>
        <Contacts changeChat={handleChatChange}/>
        {currentChat === undefined ? (
          <Welcome />
        ):(
          <ChatContainer currentChat={currentChat} />
        )}
      </div>
    </div>
  )
}

export default Chat