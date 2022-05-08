import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from '../../img/logo.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import Loading from "../Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const location = useLocation()
  const emailRef = useRef("");
  let errorElement;

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  let from = location?.state?.from?.pathname || "/";

  if(loading || loading1){
    return <Loading></Loading>
  }

  if(user || user1){
    navigate(from, {replace: true})
}


    if (error || error1) {
      errorElement = <p className="text-red-400">Error: {error?.message} {error1?.message}</p>

}



  const handleLogin = async event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;


    await signInWithEmailAndPassword(email, password)
    
}

const setPassword = async ()  => {
  const email = emailRef.current.value;
    await sendPasswordResetEmail(email, sending);
    if(email){
      toast("mail has been sent !");
    }
    else toast("Please enter your email address")
}

  

  return (
    <div className="login-cover flex justify-center items-center">
      <div className="form-control w-3/4 md:w-1/2 h-3/4 mx-auto">
        <div className="flex justify-center items-center w-full h-full">
          <form onSubmit={handleLogin}>
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
            {errorElement}
            <p className="primary-color-text">
              Forgot Password ?{" "}
              <span onClick={setPassword} className="text-orange-300 cursor-pointer">Send Email</span>{" "}
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
            <button onClick={()=>signInWithGoogle()} className="flex justify-center items-center block text-center p-2 m-3 btn2 w-full mx-auto btn2"><span className="mr-2"><FaGoogle></FaGoogle></span> Google Login</button>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
