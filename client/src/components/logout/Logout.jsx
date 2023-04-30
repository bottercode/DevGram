import React from 'react'
import classes from "./logout.module.css"
import { useHistory } from 'react-router-dom'
import { logoutRoute } from '../../APIRoutes';
import axios from 'axios';
import { BiPowerOff } from "react-icons/bi";

const Logout = () => {
  const history = useHistory();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem("Pro-Gram")
    )._id;

    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      history.push("/login");
    }
  };

  return (
    <div className={classes.Logout}>
      <button onClick={handleClick}>
        <BiPowerOff />
      </button>
    </div>
  )
}

export default Logout