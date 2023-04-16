import React from 'react'
import classes from  "./message.module.css"
import GroupsIcon from '@mui/icons-material/Groups';
import StreamIcon from '@mui/icons-material/Stream';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const Message = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <div className={classes.user_profile}>
         <h1 className={classes.h1}>Saurabh Gupta</h1>
        </div>
        <h2 className={classes.h2}>Messages </h2>
          <input className={classes.searchbar} type ="text" placeholder="Search messages"/>
            <GroupsIcon />
            <button className={classes.button}>Create Group</button>
          <div className={classes.friend_profile1}>
            <img src={props.src} alt="User Profile" />
            <h2 className={classes.h2}>{props.name}</h2>
          </div>
          <div className={classes.friend_profile2}>
            <img src={props.src} alt="User Profile" />
            <h2 className={classes.h2}>{props.name}</h2>
          </div>
          <div className={classes.friend_profile3}>
            <img src={props.src} alt="User Profile" />
            <h2 className={classes.h2}>{props.name}</h2>
          </div>
          <button className={classes.live_button}>
            <StreamIcon />
            <h3 className={classes.live}>Live</h3>
          <h3 className={classes.h3}>Join as Saurabh </h3>

          </button>
      </div>
      <div className={classes.right}>
        <h1 className={classes.brandName}>Pro-Gram</h1>
        <VideocamIcon />
        <PhoneIcon />
        
        <div className={classes.type_text} type ="text" placeholder="Search messages">
          <KeyboardVoiceIcon />
          <AttachFileIcon />
          <SendIcon />
        </div>
       
      </div>
    </div>
  )
}

export default Message