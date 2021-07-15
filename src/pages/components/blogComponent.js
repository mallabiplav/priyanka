import React from "react";
import { Link } from "react-router-dom";
import kirtipur from "../../images/Kirtipur.jpg";
import BlockContent from "@sanity/block-content-to-react";
import moment from "moment";

const BlogComponent = ({ blog }) => {
  console.log(blog.slug);
  return (
    <div className="blog-post">
      <div className="blog-post-left">
        <img src={kirtipur} alt="blog-image" />
      </div>
      <div className="blog-post-right">
        <div className="blog-post-date-location">
          {/* <p>{latestBlog.publishedAt.split("T")[0]}</p> */}
          {/* <p>{blog.author}</p> */}
          <p>{moment(blog.publishedAt).format("MMMM Do YYYY")}</p>
          <p>•</p>
          <p>{blog.location}</p>
        </div>
        <h2 className="blog-preview-title">{blog.title}</h2>
        <BlockContent
          blocks={blog.text[0]}
          projectId="4lry82fq"
          dataset="production"
        />

        <Link to={`/blog/${blog.slug.current}`}>
          <p className="blog-preview-read-more">... Read More</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;
