import React, { useState, useEffect } from "react";
import sanityClient from "../../sanity.js";
import kirtipur from "../../images/Kirtipur.jpg";
import BlockContent from "@sanity/block-content-to-react";
import { Link, useParams } from "react-router-dom";
import NavigationBar from "../components/nav.js";
import moment from "moment";
import { FaArrowLeft } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const SingleBlog = () => {
  const slug = useParams().blogID;
  const [singleBlog, setSingleBlog] = useState(null);
  const [readMoreList, setReadMoreList] = useState(null);
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  useEffect(() => {
    try {
      sanityClient
        .fetch(
          ` *[_type == "blog" && slug.current == '${slug}']{title, slug, "author": author -> name, publishedAt, text, location}`
        )
        .then((data) => setSingleBlog(data[0]));
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    try {
      sanityClient
        .fetch(
          `*[_type=="blog"]| order(_createdAt desc)[1...3]{title,publishedAt, slug}`
        )
        .then((data) => setReadMoreList(data, "!@#"));
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(singleBlog.location);
  return singleBlog ? (
    <div className=" single-blog-page">
      <NavigationBar />
      <div className="single-blog">
        <div className="single-blog-info">
          <h1>{singleBlog.title}</h1>
          <img src={kirtipur} alt="" />
          <div className="single-blog-date-location">
            <h5>{moment(singleBlog.publishedAt).format("MMMM Do YYYY")}</h5>
            <h5>{singleBlog.location}</h5>
          </div>
        </div>
        <div className="single-blog-main">
          <div className="single-blog-left">
            <BlockContent
              blocks={singleBlog.text}
              projectId="4lry82fq"
              dataset="production"
              className="single-blog-paragraph"
            />
            <Link to="/blog" style={{ color: "black" }}>
              <div className="go-back">
                <FaArrowLeft
                  style={{ fontSize: "2rem", marginRight: "1rem" }}
                />
                <p>Back to blog</p>
              </div>
            </Link>
          </div>
          {!isTablet ? (
            <div className="single-blog-read-more">
              <h2>Read More</h2>
              {readMoreList ? (
                readMoreList.map((post) => {
                  return (
                    <Link to={`/blog/${post.slug.current}`}>
                      <h4>{post.title}</h4>
                      <p>{moment(post.publishedAt).format("MMMM Do YYYY")}</p>
                    </Link>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default SingleBlog;
