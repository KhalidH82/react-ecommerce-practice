import React from "react";
import "./SignIn-SignUp.styles.scss";

import SignIn from "../../Components/sign-in/sign-in";
import SignUp from "../../Components/sign-up/sign-up";

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
