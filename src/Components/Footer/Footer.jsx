import React from "react";
import "./footer.css";
import logo from "../../assets/images/latrobeuni-partnership.jpg"
const Footer = () => {
    return ( <div className="footer"> 
    <div className="logo"> 
<div className="logo-wrapper">
 <a href="https://www.latrobe.edu.au/" target="_blank"><img src={logo} alt="footer-logo"/></a>
</div>
    </div>
<div className="terms-use">
<span> Terms of use </span> 
<span> Privacy policy</span>
</div>
<div className="copyright">
2021 rights reserved 
</div>
    </div>  );
}
 
export default Footer 