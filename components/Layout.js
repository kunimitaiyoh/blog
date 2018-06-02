import React from "react";
import Head from "react-helmet";
import { Link } from "react-router";

export default ({ children }) => (
  <div>
    <Head>
      <html lang="ja" /> {/* this is valid react-helmet usage! */}
      <meta charSet="utf-8" />
    </Head>
    <header>
    </header>
    <div>{ children }</div>
    <footer>
      <Link to="/">Go to home</Link>
    </footer>
  </div>
);
