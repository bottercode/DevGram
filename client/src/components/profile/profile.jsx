import React, { useState } from 'react';
import './profile.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = ({ name, email, bio, avatarUrl,loc }) => {
  const [avatar, setAvatar] = useState(avatarUrl);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
  };

  return (
  <div class="container">
  <div class="box">
    <div className='box-1'>
   <div className="avatar-container">
        <img className="avatar" src={avatar} alt={`p  UPLOAD`} />
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="upload-button"
        />
    </div>
    <div className="info">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{bio}</p>
        <div className='loc'>
        <LocationOnIcon fontSize='large' padding-left="0px"  className='loc-icon'/>
        <p className='loc-name'>{loc}</p>
        </div>
    </div>
    </div>
  <div className='box-2'>
  <div className='skills'>
      <p>C++</p>
      <p>React JS</p>
      <p>Node Js</p>
      <p>Express Js</p>
      <p>MongoDB</p>
      
  </div>
  <div/>
  </div>
  <div className='box-3'>
  <div className='social'>
      <InstagramIcon color="secondary" fontSize='large' padding-left="0px"  className='icons'/>
      <LinkedInIcon color="primary" fontSize='large' padding-left="0px"  className='icons'/>
  </div>
  <div className='follow'>
  <button class="follow-btn">Follow+</button>

  </div>
  </div>
  </div>
  </div>
  );
};

export default Profile;