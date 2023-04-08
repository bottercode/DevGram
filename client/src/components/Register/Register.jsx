import React, { useState } from 'react'

const Register = () => {
    
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleVaildation = () => {
        const
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
    </div>
  )
}

export default Register