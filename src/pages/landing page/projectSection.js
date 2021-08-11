import React, { useState, useEffect } from "react";
import sanityClient from "../../sanity.js";
import BlockContent from "@sanity/block-content-to-react";
// import "./projectComponent.css";
import { Link } from "react-router-dom";
import ProjectComponent from "../components/projectComponent/projectComponent.js";

const ProjectSection = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    try {
      sanityClient
        .fetch(`*[_type=="projects"]{title, slug, text, location}`)
        .then((data) => setProjects(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log("PRJECTS", projects);

  return projects ? (
    <div className="projects-section">
      <h1>Projects</h1>
      {projects.map((project, index) => {
        return <ProjectComponent project={project} index={index} />;
      })}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default ProjectSection;
