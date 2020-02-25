import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { withBreakpoints } from "react-breakpoints";

const Header = ({ breakpoints, currentBreakpoint }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`header ${navOpen ? "nav-open" : ""}`}>
      <div className="header__container">
        <img
          className="header__logo"
          src={"http://acmelogos.com/images/logo-8.svg"}
          alt="Chauffeur Services London"
        />
        <div className="header__inner">
          {breakpoints[currentBreakpoint] >= breakpoints.tablet ? (
            <RenderNav />
          ) : null}
        </div>
        <div className="header__burger" onClick={() => setNavOpen(!navOpen)}>
          <span className="header__burger--line"></span>
          <span className="header__burger--line"></span>
          <span className="header__burger--line"></span>
        </div>
      </div>
      {breakpoints[currentBreakpoint] < breakpoints.tablet ? (
        <RenderNav />
      ) : null}
    </header>
  );
};

const RenderNav = () => {
  return (
    <nav className="header__nav">
      <ul>
        <li className="header__nav--item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__nav--item">
          <Link to="/materials">Materials</Link>
        </li>
        <li className="header__nav--item">
          <Link to="/services">Services</Link>
        </li>
        <li className="header__nav--item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withBreakpoints(Header);
