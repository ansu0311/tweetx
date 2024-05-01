import React, { useState } from "react";
import "./Login.scss";
import Dark from "../../Components/Dark/Dark";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import pic1 from "../../Assets/my_png.png"
import pic2 from "../../Assets/my_png_dark.png"

const Login = ({ darkMode,toggleDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, " + ", password);
  };

  return (<>
    <ContentWrapper>
      <div className="Login_Header">
        <div className="logo">TweetX</div>
        <Dark toggleDarkMode={toggleDarkMode} />
      </div>
      <button className="create button plain">Create Account</button>
      <div className="Login">
        <div className="loginHeader">Login</div>
        <form onSubmit={handleSubmit} className="LoginForm">
          <input
          className="inputSpace"
          placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
          className="inputSpace"
          placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="formLinks">
            <div className="forgot">Forgot Password ?</div>
            <button className="submit button" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </ContentWrapper>
    <img className="LoginImg" src={darkMode?pic2:pic1} alt="design"/>
    </>
  );
};

export default Login;
