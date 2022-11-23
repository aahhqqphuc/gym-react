import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://github.com/aahhqqphuc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-img" src={Github} alt="" />
          </a>
          <a
            href="https://github.com/aahhqqphuc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-img" src={Instagram} alt="" />
          </a>
          <a
            href="https://github.com/aahhqqphuc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-img" src={LinkedIn} alt="" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
