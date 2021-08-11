import React from "react";
import priyankaImage from "../../images/priyanka.png";
import NavigationBar from "../components/nav";
import CV from "../../files/Priyanka_Shrestha_CV.pdf";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <NavigationBar />
      <div className="hero-main">
        <div className="hero-info-left">
          <div className="hero-bio">
            <h1>Priyanka Shrestha</h1>
            <p>
              My name is Priyanka Shrestha and I am a PhD student at the
              Functional Imaging Lab of the German Primate Center in Göttingen,
              Germany. My PhD project focuses on the effects of anesthesia on
              brain function - a topic that I explore via functional Magnetic
              Resonance Imaging (fMRI).
            </p>
            <div className="hero-education">
              <h3>Education</h3>
              <div className="education-studies">
                <h4>MSc in Environmental Science and Policy - 2021</h4>
                <p>Clark University - Worcester, MA</p>
              </div>
              <div className="education-studies">
                <h4>BSc in Environmental Science - 2018</h4>
                <p>University of Northampton, NAMI - Nepal - UK</p>
              </div>
            </div>
            <a href={CV} without rel="noopener noreferrer" target="_blank">
              <button class="downloadCV-button">
                <h5>Download CV</h5>
              </button>
            </a>
          </div>
        </div>
        <div className="hero-info-right">
          <div class="circle">
            <svg
              version="1.1"
              viewBox="0 0 400 400"
              preserveAspectRatio="xMinYMin meet"
            >
              <circle cx="200" cy="200" r="200" />
            </svg>
          </div>{" "}
          <img src={priyankaImage} alt="priyanka-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
