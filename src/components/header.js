import { Link } from "gatsby";
import React, { useState } from "react";
import { withBreakpoints } from "react-breakpoints";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import cx from "classnames";

import { usePrismicNavItems } from "./header.hooks";

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
  const [activeNavItem, setActiveNavItem] = React.useState("");
  const navData = usePrismicNavItems();

  const MaterialNavItems = Object.keys(navData).map((material, index) => {
    return (
      <li key={index} className="header__nav--item">
        <Link to={`/materials/${material}`}>{material}</Link>
        <ul className="header__nav--grandchildren">
          {navData[material].map((child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      </li>
    );
  });

  const handleNavItemClick = (evt, itemName) => {
    evt.preventDefault();
    setActiveNavItem(prevActive => (prevActive === itemName ? "" : itemName));
  };

  return (
    <nav className="header__nav">
      <ul>
        <li className="header__nav--item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__nav--item">
          <Link
            to="/materials"
            onClick={evt => handleNavItemClick(evt, "materials")}
          >
            Materials
            {activeNavItem === "materials" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </Link>

          <ul
            className={cx(
              { ["active"]: activeNavItem === "materials" },
              "sub-items"
            )}
          >
            {MaterialNavItems}
          </ul>
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
