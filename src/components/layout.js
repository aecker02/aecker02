import React from "react";
import PropTypes from "prop-types";
import ReactBreakpoints from "react-breakpoints";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/main.scss";

import Header from "./header";
import Footer from "./footer";

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 990,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920
};

const Layout = ({ children, customClass }) => {
  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Header />
      <main className={customClass}>{children}</main>
      <Footer />
    </ReactBreakpoints>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
