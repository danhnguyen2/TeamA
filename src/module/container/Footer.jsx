import React from "react";
import "./footer.css";
import logo from "../../images/latrobeuni-partnership.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <ul>
          <li> Contact Details:</li>
          <li> A.D Trendall Research Centre</li>
          <li> Menzies College</li>
          <li> La Trobe University</li>
          <li> Victoria 3086</li>
          <li> Australia</li>
          <br />
          <li> T: +61 39479 2845</li>
          <li> F: +61 39479 1827</li>
          <li> E: trendall@latrobe.edu.au</li>
        </ul>
      </div>
      <ul className="term-policy">
        <li>
          <a href="https://latrobe.edu.au" target="_blank">
            Link to Latrobe
          </a>
        </li>
        <li>
          <a href="https://latrobe.edu.au/library" target="_blank">
            Link to Latrobe Library
          </a>
        </li>
        <li>Terms of use</li>
        <li>Privacy Policy</li>
        <li className="copyright">2021 Rights Reserved</li>
      </ul>
    </div>
  );
};

export default Footer;
