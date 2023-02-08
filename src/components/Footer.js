import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";
import "../styles/Home.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div id="contactmetag">
            <Link to="/contactme">Contact me</Link>
          </div>
      <div className="socialMedia">
      
        <a
          href="https://twitter.com/Rajukommula0705"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/raju-kommula-b44024119/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>

        <a href="https://github.com/raju1409" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; 2023 rajukommula07@gmail.com</p>
    </div>
  );
}

export default Footer;
