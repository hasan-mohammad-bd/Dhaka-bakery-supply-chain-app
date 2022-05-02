import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from '../../img/logo.png'

const Login = () => {
  //submit the form

  const handleSubmit = () => {};

  return (
    <div className="login-cover flex justify-center items-center">
      <div className="form-control w-3/4 md:w-1/2 h-3/4 mx-auto">
        <div className="flex justify-center items-center w-full h-full">
          <form onSubmit={handleSubmit}>
            <div className="logo-control mx-auto mb-3">
              <img src={logo} alt="" />
            </div>
            <input
              className="block p-2 m-3 w-full mx-auto"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
            />
            <input
              className="block p-2 m-3 w-full mx-auto"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
            />
            <p className="primary-color-text">
              Forgot Password ?{" "}
              <span className="text-orange-300">Send Email</span>{" "}
            </p>
            <input
              className="block text-center p-2 m-3 btn2 w-full mx-auto"
              type="submit"
              value="Login"
            />
            <p className="primary-color-text text-center">
              New Here ?{" "}
              <Link className="text-orange-300" to="/register">
                Please Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
