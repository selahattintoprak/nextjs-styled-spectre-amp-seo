import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";

import theme from "../src/theme";

import Router from "next/router";
import * as gtag from "../lib/gtag";

import SEO from "../next-seo.config";
import { StylesStyles as UIStyles } from "../ui-styles/styles";
import GlobalStyles from "../styles/global.scss";

Router.events.on("routeChangeComplete", url => gtag.pageview(url));

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          <DefaultSeo config={{ ...SEO }} />
          <Component {...pageProps} />
          <UIStyles />
          <style jsx global>{GlobalStyles}</style>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
