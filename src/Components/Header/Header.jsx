import React, {useState} from "react";
import {ReactComponent as CloseMenu} from "../../assets/times-solid.svg"
import {ReactComponent as MenuIcon} from "../../assets/bars-solid.svg"
import "./heder.css"
const Header = () => { 
    const [click,setClick] = useState(false)
    const handleClick= ()=>setClick(!click)
    const closeMobileMenu= ()=>setClick(false)
    return ( <div className="header" > 
    <div className= "logo-nav"> 
    <div className="logo-container"> 
    <a href="#">
        A D TRENDALL RESEARCH CENTER FOR MEDETRENNEAN STUDIES 
     </a>
    </div>
    <ul className={click?"nav-options active":"nav-options"}>
        <li className="option" onClick={closeMobileMenu} > <a href="#"> Home </a> </li>
        <li className="option" onClick={closeMobileMenu}> <a href="#"> Research </a> </li>
        <li className="option" onClick={closeMobileMenu}> <a href="#"> About </a> </li>

    </ul>
    </div>
    <div className="mobile-menu" onClick={handleClick}> 
    {click?(<CloseMenu className="menu-icon"/>):(<MenuIcon className="menu-icon"/>)
    }
    </div>
         </div>  );
}
 
export default Header;