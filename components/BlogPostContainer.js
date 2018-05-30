import { BodyRenderer, createApp, query, withPhenomicApi } from "@phenomic/preset-react-app/lib/client";
import React from "react";
import { Link } from "react-router";

const component = ({ isLoading, page }) => (
  <div>
    { isLoading && "Loading..." }
    { !isLoading &&
      page.node && (
        <article>
          <h1>{ page.node.title }</h1>
          <BodyRenderer>{ page.node.body }</BodyRenderer>
        </article>
      )}
    <footer>
      <Link to="/">Go to home</Link>
    </footer>
  </div>
);

export default withPhenomicApi(component, props => ({
  page: query({ path: "content/posts", id: props.params.splat }),
}));
