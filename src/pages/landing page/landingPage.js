import React, { useState, useEffect } from "react";
import sanityClient from "../../sanity.js";
import HeroSection from "./heroSection";
import BlogSection from "./blogSection";
import "./landingPage.css";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectSection from "./projectSection.js";

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
    <>
      <HeroSection />
      <ProjectSection />
      <BlogSection latestBlog={latestBlog} />
    </>
  );
};

export default LandingPage;
