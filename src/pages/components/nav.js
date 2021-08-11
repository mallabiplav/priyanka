import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import CV from "../../files/Priyanka_Shrestha_CV.pdf";

// import { AiOutlineTwitter } from "react-icons/fa";

const NavigationBar = () => {
  console.log(window.location.pathname);
  const path = window.location.pathname;
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  return (
    <div className="hero-section-top-nav">
      <div className="hero-section-contact">
        <FaTwitter
          onClick={() => window.open("https://twitter.com", "_blank")}
          className="twitterIcon contact"
        />
        <FaLinkedinIn
          onClick={() => window.open("https://linkedin.com", "_blank")}
          className="linkedInIcon contact"
        />
        {!isTablet ? (
          <h5 className="contact">priyankaa.shresthaa24@gmail.com</h5>
        ) : (
          <FiMail className="linkedInIcon contact" />
        )}
      </div>
      <div className="hamburger-nav"></div>
      <nav className="hero-nav">
        <ul className="active">
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
          <li>
            {path === "/projects" ? (
              <Link to="/blog">
                <h5>Blog</h5>
              </Link>
            ) : (
              <Link to="/projects">
                <h5>Projects</h5>
              </Link>
            )}
          </li>
          <a href={CV} without rel="noopener noreferrer" target="_blank">
            <li className="downloadCV">
              <h5 id="downloadCV">Download CV</h5>
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
