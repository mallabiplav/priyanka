import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { AiOutlineTwitter } from "react-icons/fa";

const NavigationBar = () => {
  console.log(window.location.pathname);
  const path = window.location.pathname;

  return (
    <div className="hero-section-top-nav">
      <div className="hero-section-contact">
        <FaTwitter className="twitterIcon contact" />
        <FaLinkedinIn className="linkedInIcon contact" />
        <h5 className="contact">priyankaa.shresthaa24@gmail.com</h5>
      </div>
      <nav className="hero-nav">
        <ul>
          <li>
            {path === "/" ? (
              <Link to="/blog">
                <h5>Blog</h5>
              </Link>
            ) : (
              <Link to="/">
                <h5>Home</h5>
              </Link>
            )}
          </li>
          <li className="downloadCV">
            <h5 id="downloadCV">Download CV</h5>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
