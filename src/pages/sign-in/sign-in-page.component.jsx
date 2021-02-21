import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInPage = () => {
  return (
    <div className="signin-form">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInPage;
