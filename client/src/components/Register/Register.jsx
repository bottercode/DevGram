import React, { useState } from 'react'
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dit/ReactToastify.css"

const Register = () => {
    
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleVaildation = () => {
        const { password, confirmPassword, username, email} = values;
        if(password !== confirmPassword){
            toast.error(
                "Password and Confirm password should be same,",
                toastOptions
            )
            return false;
        }
        else if(username.length < 3){
            toast.error(
                "Username should be greater than atleast 3 letters"
            )
            return false
        }
        else if(password.length<8){
            toast.error(
                "Password should be greater than atleast 8 letters"
            )
            return false
        }
        return true
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(handleVaildation()){

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
                type="email"
                placeholder='Email'
                name="email"
                onChange={(e) => handleChange(e)}
            />
            <input 
                type="password"
                placeholder='Password'
                name="password"
                onChange={(e) => handleChange(e)}
            />
            <input 
                type="password"
                placeholder='Confirm Password'
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
            />
            <button type='submit'> Create User</button>
            <span>
                Already having an account? 
            </span>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Register