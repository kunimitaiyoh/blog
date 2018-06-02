import { createApp, query, withPhenomicApi } from "@phenomic/preset-react-app/lib/client";
import React from "react";
import Head from "react-helmet";
import { Link } from "react-router";
import Layout from "./Layout";

const component = ({ isLoading, posts }) => (
  <Layout>
    <Head>
      <title>Home</title>
      <meta name="description" content="Blog" />
    </Head>
    <h1>Home</h1>
    { isLoading && "Loading..." }
    { !isLoading && (
      posts &&
      posts.node && (
        <div>
          <div>
            { posts.node.previous && (
                <Link to={ posts.node.previousPageIsFirst ? `/` : `/after/${posts.node.previous}/` } >
                  Newer posts
                </Link>
              )}
          </div>
          <ul>
            { posts.node.list &&
              posts.node.list.map(post => (
                <li key={post.id}>
                  <Link to={ `/blog/${post.id}/` }>{ post.title || post.id }</Link>
                </li>
              )) }
          </ul>
          <div>
            { posts.node.next && (
                <Link to={`/after/${posts.node.next}/`}>Older posts</Link>
            )}
          </div>
        </div>
      )
    )}
  </Layout>
);

export default withPhenomicApi(component, props => ({
  posts: query({
    path: "content/posts",
    limit: 2,
    after: props.params.after
  }),
}));
