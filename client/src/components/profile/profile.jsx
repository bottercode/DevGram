import React from 'react';
import classes from './Profile.module.css';
import {FaTwitter} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Profile = (props) => {
  const skills = props.skills;
  return (
    <div className={classes.profile}>
      <div className={classes.leftSection}>
        <div className={classes.profilePic}>
          <img src="https://robohash.org/mail@ashallendesign.co.uk" alt="Profile" />
        </div>
        <h2 className={classes.username}>{props.name}</h2>
        <p className={classes.location}>{props.location}</p>
        <p className={classes.bio}>{props.bio}</p>
        <div className={classes.techskills}>
          {skills.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className={classes.socialHandles}>
          <a href="https://twitter.com/skgx" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"><FaTwitter/></i>
          </a>
          <a href="https://github.com/skgx" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"><FaGithub/></i>
          </a>
          <a href="https://linkedin.com/in/skgx" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"><FaLinkedin/></i>
          </a>
        </div>
        <div className={classes.buttons}>
          <button className={classes.followBtn}>Follow+</button>
          <button className={classes.editProfileBtn}>Edit Profile</button>
        </div>
      </div>
      <div className={classes.middleSection}>
        <h3>Projects</h3>
        <div className={classes.projectList}>
          <div className={classes.project}>
            <h4>Project 1</h4>
            <p>Description of project 1</p>
          </div>
          <div className={classes.project}>
            <h4>Project 2</h4>
            <p>Description of project 2</p>
          </div>
        </div>
      </div>
      <div className={classes.rightSection}>
        <div className={classes.recentActivity}>
        <h3>Recent Activity</h3>
        <ul className={classes.activityList}>
          <li className={classes.activity}>Updated profile picture</li>
          <li className={classes.activity}>Posted a new project</li>
          <li className={classes.activity}>Commented on a discussion</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
