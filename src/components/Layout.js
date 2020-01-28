import React from "react"
import PropTypes from "prop-types"
import ReactBreakpoints from 'react-breakpoints'
import "../scss/main.scss"

import Header from './Header'
import Footer from './Footer'
 
const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 990,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

const Layout = ({ children }) => {
  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ReactBreakpoints>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
