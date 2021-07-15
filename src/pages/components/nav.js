import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="hero-section-top-nav">
      <div className="hero-section-contact">
        <span>Logo</span>
        <span>Logo</span>
        <h5>priyankaa.shresthaa24@gmail.com</h5>
      </div>
      <nav className="hero-nav">
        <ul>
          <li>
            <Link to="/blog">
              <h5>Blog</h5>
            </Link>
          </li>
          <li className="downloadCV">
            <Link>
              <h5 id="downloadCV">Download CV</h5>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
