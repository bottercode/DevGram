import React from 'react';
import classes from './navbar.module.css';
function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1 className={classes.logotext}>Pro-Gram</h1>
      </div>
      <nav className={classes.nav}>
      <ul>
          <a className={classes.elements} href="profile">Profile</a>
          <a className={classes.elements} href="friends">Friends</a>
          <a className={classes.elements} href="messages">Messages</a>
          <a className={classes.elements} href="">Logout</a>
      </ul>
      </nav>
    </header>
  );
}

export default Navbar;