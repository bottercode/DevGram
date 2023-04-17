import React from 'react';
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.left}>
        <h1 className={classes.brandName}>
          <span className={classes.devText}>DEV</span> 
          <span className={classes.gramText}>GRAM.</span>
        </h1>

        <h2 className={classes.displayText}>
        Built for developers by developers /&gt; 
        </h2>
      </div>

     
      <div className={classes.right}>
        <div className={classes.loginSignup}>
          <a href="/login" className={classes.loginLink}>Log in</a>
          <a href="/register" className={classes.signupLink}>Sign up</a>
        </div>

        <h2 className={classes.devMeaning}>
          Developer
          <span className={classes.devMeaningNoun}>
          noun 
          </span>
          <br />
          <span className={classes.devMeaningSentence}>
          -a person or thing that develops something
          </span>
        </h2>

        <h2 className={classes.descText}>
          DevGram is a web application designed for developers to connect with each other.
        </h2>
      </div>
    </div>
  );
}

export default Home;
