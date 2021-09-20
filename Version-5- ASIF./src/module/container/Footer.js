import React, { useState } from "react";
import "./Footer.css";
import apiKey from "../../emailKey"
import{ init} from 'emailjs-com';
import emailjs from "emailjs-com"
init("user_xhQE8RcVRRuqKv43qLfqB");
const Footer = () => {
  const [input,setInput]=useState('')
  const [name,setName]=useState('')
  const handleClick=(e)=>{
    e.preventDefault(); // Prevents default refresh by the browser
emailjs.send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID,{name: name,input: input}, apiKey.USER_ID)
.then((result) => {
alert("Message Sent, We will get back to you shortly", result.text);
},
(error) => {
alert("An error occurred, Please try again", error.text);
});

  }
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
        <input type='text' onChange={e=>setName(e.target.value)} placeholder="Your Name or Email"/>
        <input type="text" onChange={e=>setInput(e.target.value)} placeholder="Your Feedback or Query"/>
        <button className="button-submit" onClick={(e)=>handleClick(e)}>Send</button>
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
