import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import signInPageStyle from "./SignIn.module.scss";
import {API_URL} from "../../services/Config";

const SignUp = () => {
  /****************************************/
  /*********User Registration *************/


  const onSubmitGoogleSignUp = ()=>{

    window.open(API_URL+"/auth/google/callback","_self")

  }


  return (
    <div className="container">
      <div className={signInPageStyle.signInContainer}>
        <div className={signInPageStyle.signInFormDesign}>
          <h5>Sign Up</h5>

          <div className={signInPageStyle.inputFormArea}>
      
            <button
              className={signInPageStyle.signInButton}
              onClick={onSubmitGoogleSignUp}
            >
              Google Sign Up
            </button>

            <span className={signInPageStyle.signUpHereOption}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <p>Already have an account? Sign In now.</p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
