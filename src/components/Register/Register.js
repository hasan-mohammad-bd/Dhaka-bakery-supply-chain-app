import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";

const Register = () => {
  const mailRef = useRef("");
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let errorElement;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  if (loading || loading1) {
    //   <Loading></Loading>
  }

  if (user || user1) {
    console.log(user);
    navigate("/");
  }

  if (error || error1) {
    errorElement = (
      <p className="text-red-400">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  const setPassword = async (event) => {
    event.preventDefault();
    const email = mailRef.current.value;
    await sendPasswordResetEmail(email, sending);
    if (email) {
      toast("mail has been sent !");
    } else toast("Please enter your email address");
  };

  return (
    <div className="login-cover flex justify-center items-center">
      <div className="form-control w-3/4 md:w-1/2 h-3/4 mx-auto">
        <div className="flex justify-center items-center w-full h-full">
          <form onSubmit={handleSignUp}>
            <div className="logo-control mx-auto mb-3">
              <img src={logo} alt="" />
            </div>
            <input
              className="block p-2 m-3 w-full mx-auto"
              type="text"
              name="name"
              id="name"
              required
              placeholder="name"
            />
            <input
              className="block p-2 m-3 w-full mx-auto"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              ref={mailRef}
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
              <span onClick={setPassword} className="text-orange-300 cursor-pointer">Send Email</span>{" "}
            </p>
            <input
              className="block text-center p-2 m-3 btn2 w-full mx-auto"
              type="submit"
              value="Register"
            />
            {errorElement}
            <p className="primary-color-text text-center">
              Already Registered ?{" "}
              <Link className="text-orange-300" to="/login">
                Please Login
              </Link>
            </p>
            <button onClick={()=>signInWithGoogle()} className="flex justify-center items-center block text-center p-2 m-3 btn2 w-full mx-auto btn2"><span className="mr-2"><FaGoogle></FaGoogle></span> Google Login</button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
