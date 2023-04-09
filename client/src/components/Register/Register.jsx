import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../../APIRoutes";
import { useHistory, Link } from "react-router-dom";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Form from "../../ui/Form";

const localstorage_key = process.env.LOCALSTORAGE_KEY;

const Register = () => {
  const history = useHistory();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const checkIfUserLoggedIn = () => {
      if (localStorage.getItem(localstorage_key)) {
        history.push("/");
      }
    };
    checkIfUserLoggedIn();
  }, );

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and Confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than atleast 3 letters",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be greater than atleast 8 letters",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, password, username } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(localstorage_key, JSON.stringify(data.user));
        history.push("/");
      }
    }
  };

  
  return (
    <div className="flex justify-center items-center h-full">
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <Button type="submit">Create User</Button>
        <span className="text-[10px] block text-center mt-4">
          Already have an account?{" "}
          <Link className="font-semibold text-blue-600" to="/login">
            Login
          </Link>
        </span>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Register;
