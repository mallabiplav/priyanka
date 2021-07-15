import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing page/landingPage";
import BlogPage from "./pages/blog page/blogPage";
import SingleBlog from "./pages/blog page/singleBlog";

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/blog:blog-id" component={SingleBlog} />
      </Switch>
    </main>
  );
};

export default App;
