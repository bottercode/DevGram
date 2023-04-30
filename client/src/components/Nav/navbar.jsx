import React from "react";
import classes from "./navbar.module.css";

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1 className={classes.logotext}>DevGram</h1>
        <nav className={classes.nav}>
          <ul></ul>
        </nav>
      </div>

      <div className={classes.profile}></div>
    </header>
  );
}

export default Navbar;
