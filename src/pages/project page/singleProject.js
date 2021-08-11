import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../sanity.js";
import BlockContent from "@sanity/block-content-to-react";
import { FaArrowLeft } from "react-icons/fa";

import NavigationBar from "../components/nav.js";
import "./projectPage.css";
const SingleProject = () => {
  const slug = useParams().projectID;
  const [project, setProject] = useState(null);

  useEffect(() => {
    try {
      sanityClient
        .fetch(
          ` *[_type == "projects" && slug.current == '${slug}']{title, slug, text, location, "imageUrl": mainImage.asset->url}`
        )
        .then((data) => setProject(data[0]));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return project ? (
    <section className="single-project-section">
      <NavigationBar />
      <img src={project.imageUrl} alt="project main" />
      <div className="single-project-main-info">
        <h2>{project.title}</h2>
        <h3>{project.location}</h3>
        <BlockContent
          className="single-project-p"
          blocks={project.text}
          projectId="4lry82fq"
          dataset="production"
        />
        <Link to="/projects" style={{ color: "black" }}>
          <div className="go-back">
            <FaArrowLeft style={{ fontSize: "2rem", marginRight: "1rem" }} />
            <p>Back to projects</p>
          </div>
        </Link>
      </div>
    </section>
  ) : (
    <h1>Loading</h1>
  );
};

export default SingleProject;
