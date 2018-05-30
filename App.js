import { createApp, withPhenomicApi } from "@phenomic/preset-react-app/lib/client";
import { query } from "@phenomic/plugin-renderer-react/lib/client";
import React from "react";
import { Router, Route, browserHistory } from "react-router";
import BlogPostContainer from "./components/BlogPostContainer";

const Home = () => (
  <div>
    <p>This is a homepage</p>
  </div>
);

const containter = withPhenomicApi(BlogPostContainer, props => ({
  page: query({ path: "content/posts", id: props.params.splat }),
}));

export default createApp(() => (
  <Router history={ browserHistory }>
    <Route path="/" component={ Home } />
    <Route path="/blog/*" component={ containter } />
  </Router>
));
