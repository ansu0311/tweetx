import React from "react";
import "./Footer.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="logo">TweetX</div>
        <div className="links">
          <li className="link">About us</li>
          <li className="link">Career</li>
          <li className="link">Help</li>
          <li className="link">Terms & Conditions</li>
        </div>
    </div>
  );
};

export default Footer;
