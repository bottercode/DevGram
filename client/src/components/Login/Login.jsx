import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../../APIRoutes";
import { useHistory, Link } from "react-router-dom";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const localstorage_key = process.env.LOCALSTORAGE_KEY;

const Login = () => {
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
    password: "",
  });

  useEffect(() => {
    const checkIfUserLoggedIn = () => {
      if (localStorage.getItem(localstorage_key)) {
        history.push("/");
      }
    };
    checkIfUserLoggedIn();
  }, );

  const handleValidation = () => {
    const { username, password } = values;
    if (username === "" || password === "") {
      toast.error("Email or password is incorrect.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
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
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Form>
        <Input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => handleChange(e)}
        />

        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />

        <Button type="submit"> Log In</Button>
        <span className="text-[10px] block text-center mt-4">
          Don't have an account?{" "}
          <Link className="font-semibold text-blue-600" to="/register">
            Sign Up{" "}
          </Link>
        </span>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Login;
