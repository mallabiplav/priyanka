import React from "react";
import priyankaImage from "../../images/priyanka.png";
import NavigationBar from "../components/nav";

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
                <h4>MSc in Environmental Sciences - 2021</h4>
                <p>Clark Univerisity - Boston</p>
              </div>
              <div className="education-studies">
                <h4>BSc in Environmental Sciences - 2018</h4>
                <p>Nami College - Nepal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-info-right">
          <div className="circle"></div>
          <img src={priyankaImage} alt="priyanka-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
