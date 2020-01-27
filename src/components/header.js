import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  
  return (
    <header className={`header ${navOpen ? "nav-open" : ""}`}>
      <div className="header__container">
        <img
          className="header__logo"
          src={'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo2.png'}
          alt="Chauffeur Services London"
        />
        <div className="header__burger" onClick={() => setNavOpen(!navOpen)}>
          <span className="header__burger--line"></span>
          <span className="header__burger--line"></span>
          <span className="header__burger--line"></span>
        </div>
      </div>
      <nav className="header__nav">
        <ul>
          <li className="header__nav--item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__nav--item">
            <Link to="/about">About</Link>
          </li>
          <li className="header__nav--item">
            <Link to="/services">Services</Link>
          </li>
           <li className="header__nav--item">
            <Link to="/quote">Get a Quote</Link>
          </li>
          <li className="header__nav--item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
