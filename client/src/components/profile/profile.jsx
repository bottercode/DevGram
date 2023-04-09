import React, { useState } from "react";
import "./profile.css";

const Profile = ({ name, email, bio, avatarUrl }) => {
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
    <div className="profile">
      <div className="avatar-container">
        <img className="avatar" src={avatar} alt={`upload`} />
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
        <p>Hello</p>
      </div>
    </div>
  );
};

export default Profile;
