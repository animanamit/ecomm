import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInSubmit = event => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signin">
      <h3>I already have an account</h3>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSignInSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <label>Password</label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignIn;
