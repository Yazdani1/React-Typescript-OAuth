import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

import signInPageStyle from "./SignIn.module.scss";

const SignIn = () => {
  /****************************************/
  /*********  User Login      *************/
  /****************************************/

  return (
    <div className="container">
      <div className={signInPageStyle.signInContainer}>
        <div className={signInPageStyle.signInFormDesign}>
          <h5>Sign In</h5>

          <div className={signInPageStyle.inputFormArea}>
            <button className={signInPageStyle.signInButton}>
              Google Sign In
            </button>
            <span className={signInPageStyle.signUpHereOption}>
              <Link to={"/signup"} style={{ textDecoration: "none" }}>
                <p>Don't have an account? Create one now.</p>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default SignIn;
