import React, { useState, useEffect, useRef } from 'react';
import { recieveMessageRoute, sendMessageRoute } from '../../APIRoutes';
import classes from './chatcontainer.module.css';
import Logout from '../logout/Logout';
import axios from 'axios';
import ChatInput from '../chatInput/ChatInput';
import { v4 as uuidv4 } from 'uuid';

const ChatContainer = ({ username, currentChat, socket }) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await JSON.parse(localStorage.getItem('Pro-Gram'));
      if (data && currentChat) {
        const response = await axios.post(recieveMessageRoute, {
          from: data._id,
          to: currentChat._id,
        });
        setMessages(response.data);
      }
    };
    fetchMessages();
  }, [currentChat]);

  
  const handleSendMsg = async (msg) => {
    const data = await JSON.parse(localStorage.getItem('Pro-Gram'));
    if (data && currentChat) {
      socket.current.emit('send-msg', {
        to: currentChat._id,
        from: data._id,
        msg,
      });
      await axios.post(sendMessageRoute, {
        from: data._id,
        to: currentChat._id,
        message: msg,
      });

      const msgs = [...messages];
      msgs.push({ fromSelf: true, message: msg });
      setMessages(msgs);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on('msg-recieve', (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prevMessages) => [...prevMessages, arrivalMessage]);
    }
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={classes.ChatContainer}>
      <div className={classes.username}>
        <h3>{username}</h3>
      </div>
      <Logout />
      <div className={classes.chatMessages}>
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`${classes.message} ${
                  message.fromSelf ? classes.sended : classes.received
                }`}
              >
                <div className={classes.content}>
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
};

export default ChatContainer;
