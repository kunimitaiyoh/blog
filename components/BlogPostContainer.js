import { BodyRenderer, createApp, query, withPhenomicApi } from "@phenomic/preset-react-app/lib/client";
import React from "react";
import { Link } from "react-router";
import Layout from "./Layout";

const component = ({ isLoading, page }) => (
  <Layout>
    { isLoading && "Loading..." }
    { !isLoading &&
      page.node && (
        <article>
          <Head>
            <title>{ page.node.title } - Blog</title>
            <meta name="description" content="Blog" />
          </Head>
          <h1>{ page.node.title }</h1>
          <BodyRenderer>{ page.node.body }</BodyRenderer>
        </article>
      )}
    <footer>
      <Link to="/">Go to home</Link>
    </footer>
  </Layout>
);

export default withPhenomicApi(component, props => ({
  page: query({ path: "content/posts", id: props.params.splat }),
}));
