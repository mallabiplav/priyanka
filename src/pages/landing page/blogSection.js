import React from "react";
import { Link } from "react-router-dom";
import BlogComponent from "../components/blogComponent";

const BlogSection = ({ latestBlog }) => {
  console.log(latestBlog);

  return latestBlog ? (
    <section className="blog-section">
      <h1 className="blog-heading">Blog</h1>
      <BlogComponent blog={latestBlog} />

      <Link to="/blog" className="go-to-blog">
        <p>Go to Blog...</p>
      </Link>
    </section>
  ) : (
    <h1>Loading</h1>
  );
};

export default BlogSection;
