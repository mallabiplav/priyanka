import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../sanity.js";
import BlockContent from "@sanity/block-content-to-react";
import NavigationBar from "../components/nav.js";
import ProjectComponent from "../components/projectComponent/projectComponent.js";

const ProjectPage = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    try {
      sanityClient
        .fetch(
          ` *[_type == "projects" ]{title, slug, text, location, "imageUrl": mainImage.asset->url}`
        )
        .then((data) => setProjects(data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return projects ? (
    <section className="single-project-section">
      <NavigationBar />
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <ProjectComponent project={project} index={index} />
      ))}
    </section>
  ) : (
    <h1>Loading</h1>
  );
};

export default ProjectPage;
