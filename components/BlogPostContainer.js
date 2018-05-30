import React from "react";
import { Link } from "react-router";
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";

export default ({ isLoading, page }) => (
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
