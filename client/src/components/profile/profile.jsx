
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="left-section">
        <div className="profile-pic">
          <img src="https://robohash.org/mail@ashallendesign.co.uk" alt="Profile" />
        </div>
        <h2 className="username">John Doe</h2>
        <p className="location">San Francisco, CA</p>
        <p className="bio">Full-stack developer with 5+ years of experience</p>
        <div className="tech-skills">
          <p>JavaScript</p>
          <p>React</p>
          <p>Node.js</p>
        </div>
        <div className="social-handles">
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="buttons">
          <button className="follow-btn">Follow</button>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
      <div className="middle-section">
        <h3>Projects</h3>
        <div className="project-list">
          <div className="project">
            <h4>Project 1</h4>
            <p>Description of project 1</p>
          </div>
          <div className="project">
            <h4>Project 2</h4>
            <p>Description of project 2</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h3>Recent Activity</h3>
        <ul className="activity-list">
          <li>Updated profile picture</li>
          <li>Posted a new project</li>
          <li>Commented on a discussion</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
