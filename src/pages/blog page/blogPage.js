import React, { useEffect, useState } from "react";
import sanityClient from "../../sanity.js";
import BlogComponent from "../components/blogComponent.js";
import NavigationBar from "../components/nav";
import "./blogPage.css";

const BlogPage = () => {
  const [blogList, setBloglist] = useState(null);

  useEffect(() => {
    try {
      sanityClient
        .fetch(
          `*[_type=="blog"]| order(_createdAt desc){title, slug, "author": author -> name, publishedAt, text, location}`
        )
        .then((data) => setBloglist(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(readMoreList, "!@##");

  return (
    <section className="blog-page-section">
      <NavigationBar className="blog-page-nav" />
      <h1 className="blog-page-h1">Blogs</h1>
      {blogList ? (
        blogList.map((blog) => <BlogComponent blog={blog} />)
      ) : (
        <h1>Loading</h1>
      )}
    </section>
  );
};

export default BlogPage;
