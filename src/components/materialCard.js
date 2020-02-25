import React from "react";
import { Link } from "gatsby";
import { RichText, Date } from "prismic-reactjs";
import { linkResolver } from "../utils/linkResolver";
import { toLowerKebabCase } from "../utils/helpers";

const MaterialCard = ({ imageUrl, title, description, customLink }) => {
  return (
    <Link
      to={`/materials/${customLink ? customLink + "/" : ""}${toLowerKebabCase(
        title
      )}`}
      className="material-card"
    >
      <h2 className="material-card__title">{title}</h2>
      <div
        className="material-card__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="material-card__content">
        {RichText.render(description, linkResolver)}
        <button className="material-card__cta">Find out more</button>
      </div>
    </Link>
  );
};

export default MaterialCard;
