import React, { useState } from "react";
import "./Signup.scss";
import Dark from "../../Components/Dark/Dark";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import pic1 from "../../Assets/my_png.png"
import pic2 from "../../Assets/my_png_dark.png"

const Signup = ({ darkMode,toggleDarkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, " + ", password);
  };

  return (<>
    <ContentWrapper>
      <div className="Signup_Header">
        <div className="logo">TweetX</div>
        <Dark toggleDarkMode={toggleDarkMode} />
      </div>
      <button className="login button plain">Login</button>
      <div className="Signup">
        <div className="signupHeader">Signup</div>
        <form onSubmit={handleSubmit} className="SignupForm">
          <input
          className="inputSpace"
          placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
          className="inputSpace"
          placeholder="Confirm Password"
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </form>
        <div className="formLinks">
            <div className="forgot">Forgot Password ?</div>
            <button className="submit button" onClick={handleSubmit}>Signup</button>
        </div>
      </div>
    </ContentWrapper>
    <img className="SignupImg" src={darkMode?pic2:pic1} alt="design"/>
    </>
  );
};

export default Signup;
