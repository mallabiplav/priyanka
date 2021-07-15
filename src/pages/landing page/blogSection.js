import React from "react";
import { Link } from "react-router-dom";
import kirtipur from "../../images/Kirtipur.jpg";
import BlockContent from "@sanity/block-content-to-react";

const BlogSection = ({ latestBlog }) => {
  console.log(latestBlog);

  return latestBlog ? (
    <section className="blog-section">
      <h1 className="blog-heading">Blog</h1>
      <p>Latest Post</p>
      <div className="blog-post">
        <div className="blog-post-left">
          <img src={kirtipur} alt="blog-image" />
        </div>
        <div className="blog-post-right">
          <div className="blog-post-date-location">
            {/* <p>{latestBlog.publishedAt.split("T")[0]}</p> */}
            <p>{latestBlog.author}</p>
            <p>{latestBlog.location}</p>
          </div>
          <h2 className="blog-preview-title">{latestBlog.title}</h2>
          <BlockContent
            blocks={latestBlog.text[0]}
            projectId="4lry82fq"
            dataset="production"
          />
          <p className="blog-preview-read-more">... Read More</p>
        </div>
        {/* <Link to="#"> */}
        <p>Go to Blog...</p>
        {/* </Link> */}
      </div>
    </section>
  ) : (
    <h1>Loading</h1>
  );
};

export default BlogSection;
