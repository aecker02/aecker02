import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import PropTypes from "prop-types";

const Item = ({ title, description, link, linkText }) => {
  return (
    <div className="featured-section__item">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <Link to={link}>{linkText}</Link>
    </div>
  );
};

const Featured = ({ items }) => {
  return (
    <div className="featured-section">
      {items.length &&
        items.map((item, index) => <Item key={`item-${index}`} {...item} />)}
    </div>
  );
};

Featured.propTypes = {
  items: PropTypes.array
};

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string
};

export default Featured;
