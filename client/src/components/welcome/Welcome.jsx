import React from 'react'
import classes from "./welcome.module.css"
import { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Drake from "../../assets/drake.jpg"

const Welcome = () => {
    const [userName, setUserName] = useState("");
    const history = useHistory();

    useEffect(() => {
        const func = async() => {
            setUserName(
                await JSON.parse(
                    localStorage.getItem("Pro-Gram")
                ).username
            )
        }
        func();
    }, [history])

  return (
    <div className={classes.welcome}>
        <img src = {Drake}></img>
        <h1>
            Welcome <span>{userName}</span>
        </h1>
        <h3>Start messaging...</h3>
    </div>
  )
}

export default Welcome