import React from "react";
import "./Footer.css";
import logo from "../../images/latrobeuni-partnership.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <div className="logo-wrapper">
          <a href="https://www.latrobe.edu.au/" target="_blank">
            <img src={logo} alt="footer-logo" />
          </a>
        </div>
      </div>
      <div className="terms-use">
        <span> Terms of use </span>
        <span> Privacy Policy</span>
      </div>
      <div className="copyright">&copy; 2021 Rights Reserved</div>
    </div>
  );
};

export default Footer;
