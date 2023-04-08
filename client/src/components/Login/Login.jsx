import React, { useState,useEffect } from 'react'
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { registerRoute } from '../../APIRoutes';
import { useHistory, Link } from "react-router-dom";

const localstorage_key = process.env.LOCALSTORAGE_KEY

const Login = () => {
  
    const history = useHistory();
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }

    const [values, setValues] = useState({
        username: "",
        password: "",
    })

    useEffect(() => {
        const checkIfUserLoggedIn = () => {
            if (localStorage.getItem(localstorage_key)) {
              history.push("/");
            }
          }
          checkIfUserLoggedIn();
      }, []);

    const handleValidation = () => {
        const {username, password} = values;
        if(username === "" || password === ""){
            toast.error(
                "Email or password is incorrect.",
                toastOptions
            )
            return false;
        }
        return true
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(handleValidation()){
            const { password, username } = values;
            const {data} = await axios.post(registerRoute, {
                username, 
                password
            })
            if(data.status === false){
                toast.error(data.msg, toastOptions)
            }
            if(data.status === true){
                localStorage.setItem(
                    localstorage_key,
                    JSON.stringify(data.user)
                )
                history.push("/")
            }
        }
    }
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value});
    }

  return (
    <div className='register'>
        <form action ="" onSubmit={(event) => handleSubmit(event)}>
            <div className='title-name'>
                <h1>Pro-Gram</h1>
            </div>
            <input 
                type="text"
                placeholder='username'
                name="username"
                onChange={(e) => handleChange(e)}
            />
            
            <input 
                type="password"
                placeholder='Password'
                name="password"
                onChange={(e) => handleChange(e)}
            />
           
            <button type='submit'> Log In</button>
            <span>
                Don't have an account? <Link to="/register">Sign Up </Link>
            </span>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Login