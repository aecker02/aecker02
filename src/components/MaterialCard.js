import React from "react";
import { Link } from "gatsby";
import { RichText, Date } from "prismic-reactjs";
import { linkResolver } from "../utils/linkResolver";
import { toLowerKebabCase } from "../utils/helpers";

const MaterialCard = ({ material, title, description }) => {
  return (
    <Link
      to={`/materials/${toLowerKebabCase(title)}`}
      className="material-card"
    >
      <h2 className="material-card__title">{title}</h2>
      <div
        className="material-card__image"
        style={{ backgroundImage: `url(${material[0].image.url})` }}
      ></div>
      <div className="material-card__content">
        {RichText.render(description, linkResolver)}
        <Link
          to={`/materials/${toLowerKebabCase(title)}`}
          className="material-card__cta"
        >
          Find out more
        </Link>
      </div>
    </Link>
  );
};

export default MaterialCard;
