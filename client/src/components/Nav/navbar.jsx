import React from 'react';
import classes from './navbar.module.css';

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1 className={classes.logotext}>DevGram</h1>
      </div>
      <nav className={classes.nav}>
      <ul>
          <a className={classes.elements} href="profile">Profile</a>
          <a className={classes.elements} href="friends">Friends</a>
          <a className={classes.elements} href="messages">Messages</a>
          <a className={classes.elements} href="">Logout</a>
          <li className={classes.search}>
            <input type="text" placeholder="Search" />
            <button type="submit">
            </button>
          </li>
      </ul>
      </nav>
      <div className={classes.profile}></div>
    </header>
  );
}

export default Navbar;