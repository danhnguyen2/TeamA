import React, { useState } from "react";
import "./Footer.css";
// import apiKey from "../../emailkey";
import { Link } from 'react-router-dom';
import { init } from 'emailjs-com';
// import emailjs from "emailjs-com"
init("user_xhQE8RcVRRuqKv43qLfqB");

const Footer = () => {
  // const [input, setInput] = useState('')
  // const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const handleClick = (e) => {
  //   e.preventDefault(); // Prevents default refresh by the browser
  //   emailjs.send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, { name: name, input: input }, apiKey.USER_ID)
  //     .then((result) => {
  //       alert("Message Sent, We will get back to you shortly", result.text);
  //     },
  //       (error) => {
  //         alert("An error occurred, Please try again", error.text);
  //       });
  //   setInput('');
  //   setName('');
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    alert('Subscribed!');
    setEmail('');
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
        {/* <input type='text' onChange={e => setName(e.target.value)} value={name} placeholder="Your Name or Email" />
        <input type="text" onChange={e => setInput(e.target.value)} value={input} placeholder="Your Feedback or Query" />
        <button className="button-submit" onClick={(e) => handleClick(e)}>Send</button>
        <br />*/}
        <p className="subscribe">Subscribe to our Newsletter</p>

        <form onSubmit={handleSubmit}>
          <input type='text' onChange={e => setEmail(e.target.value)} value={email} placeholder="Enter Your Email" />
          <button className="button-sub" value="submit">Subscribe</button>
  </form>
        <li>
          <Link href="https://latrobe.edu.au" target="_blank">
            Link to Latrobe
          </Link>
        </li>
        <li>
          <Link href="https://latrobe.edu.au/library" target="_blank">
            Link to Latrobe Library
          </Link>
        </li>
        <li>Terms of use</li>
        <li>Privacy Policy</li>
        <li className="copyright">&copy; 2021 Rights Reserved</li>
        <div>
          <Link href="https://www.facebook.com/latrobe" class="fa fa-facebook" target="_blank"></Link>
          <Link href="https://www.linkedin.com/school/la-trobe-university/" class="fa fa-linkedin" target="_blank"></Link>
          <Link href="https://www.youtube.com/channel/UCiooRETYlTQuoG8iWIxWPWg" class="fa fa-youtube" target="_blank"></Link>
          <Link href="https://www.instagram.com/latrobeuni/" class="fa fa-instagram" target="_blank"></Link>
          <Link href="https://www.pinterest.com/pin/77757531057016278/" class="fa fa-pinterest" target="_blank"></Link>
        </div>
      </ul>

    </div>
  );
};

export default Footer;