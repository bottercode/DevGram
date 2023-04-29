import React, {useState} from 'react'
import classes from "./chatinput.module.css"
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Picker from "emoji-picker-react";

const ChatInput = ({ handleSendMsg }) => {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emoji) => {
    console.log(emoji)
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.trim().length > 0) {
      console.log('Chat entered:', msg);
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div className={classes.ChatInput}>
      <div className={classes.ButtonContainer}>
        <div className={classes.emoji}>
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className={classes.InputContainer} onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  )
}

export default ChatInput