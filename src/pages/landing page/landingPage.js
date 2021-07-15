import React, { useState, useEffect } from "react";
import sanityClient from "../../sanity.js";
import HeroSection from "./heroSection";
import BlogSection from "./blogSection";
import ProjectSection from "./projectSection.js";
import "./landingPage.css";
import { BrowserRouter as Router } from "react-router-dom";

const LandingPage = () => {
  const [latestBlog, setLatestBlog] = useState(null);

  useEffect(() => {
    try {
      sanityClient
        .fetch(
          `*[_type=="blog"]|order(_createdAt desc) [0]{title, slug, "author": author -> name, publishedAt, text, location, preview}`
        )
        .then((data) => setLatestBlog(data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(latestBlog);
  return (
    <Router>
      <HeroSection />
      {/* <ProjectSection /> */}
      <BlogSection latestBlog={latestBlog} />
    </Router>
  );
};

export default LandingPage;
