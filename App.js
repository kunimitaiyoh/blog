import { createApp, withPhenomicApi } from "@phenomic/preset-react-app/lib/client";
import { query } from "@phenomic/plugin-renderer-react/lib/client";
import React from "react";
import { Router, Route, browserHistory } from "react-router";
import BlogPostContainer from "./components/BlogPostContainer";
import HomeContainer from "./components/HomeContainer";

export default createApp(() => (
  <Router history={ browserHistory }>
    <Route path="/" component={ HomeContainer } />
    <Route path="/blog/*" component={ BlogPostContainer } />
  </Router>
));
