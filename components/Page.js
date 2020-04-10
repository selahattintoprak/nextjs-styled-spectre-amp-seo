import PropTypes from "prop-types";
import NextHead from "next/head";
import { AmpIncludeAmpInstallServiceworker } from "./amp/AmpCustomElement";
import SEO from "../next-seo.config-page";

// Your app's theme color
const THEME_COLOR = "#005af0";

/**
 * A sample page Page installing the AMP Serviceworker by default.
 *
 * @param {Props} props
 */
const Page = props => (
  <>
    <NextHead>
      <title>{props.title || ""}</title>
      <meta name="description" content={props.description || ""} />
      <meta name="theme-color" content={THEME_COLOR} />
      <link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />
      <link rel="apple-touch-icon" href="/static/images/icons-192.png" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </NextHead>
    {props.children}
    <AmpIncludeAmpInstallServiceworker />
    <amp-install-serviceworker
      src="/serviceworker.js"
      data-iframe-src="/install-serviceworker.html"
      layout="nodisplay"
    />
  </>
);

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Page;
