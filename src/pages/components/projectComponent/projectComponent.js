import React, { useState, useEffect } from "react";
// import sanityClient from "../../../sanity.js";
import BlockContent from "@sanity/block-content-to-react";
import "./projectComponent.css";
import { Link } from "react-router-dom";

const ProjectComponent = ({ project, index }) => {
  const path = window.location.pathname;
  console.log(path);

  return (
    <div
      key={index}
      className={
        path != "/projects"
          ? "single-project"
          : "single-project single-project-page"
      }
    >
      <div className="single-project-info">
        <div className="single-project-left">
          <h3 className="single-project-heading">{project.title}</h3>
          <h4 className="single-project-location">{project.location}</h4>
        </div>
        <div className="single-project-right">
          <BlockContent
            blocks={project.text[0]}
            projectId="4lry82fq"
            dataset="production"
          />
          <Link to={`/projects/${project.slug.current}`}>
            <p className="blog-preview-read-more">... Read More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
