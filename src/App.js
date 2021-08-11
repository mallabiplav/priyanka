import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing page/landingPage";
import BlogPage from "./pages/blog page/blogPage";
import SingleBlog from "./pages/blog page/singleBlog";
import ProjectPage from "./pages/project page/projectPage";
import SingleProject from "./pages/project page/singleProject";

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        <Route path="/blog/:blogID" children={<SingleBlog />} />
        <Route exact path="/projects">
          <ProjectPage />
        </Route>
        <Route path="/projects/:projectID" children={<SingleProject />} />
      </Switch>
    </main>
  );
};

export default App;
