import React from "react";
import { Link } from "gatsby";
import { toTitleCase } from "../utils/helpers";

const Breadcrumb = ({ currentPage, isMaterial, parentPage }) => {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb__inner">
        {!currentPage ? (
          <li className="breadcrumb__item breadcrumb__item--current">Home</li>
        ) : (
          <li>
            <Link className="breadcrumb__item" to="/">
              Home
            </Link>
          </li>
        )}

        {isMaterial && (
          <li>
            <Link className="breadcrumb__item" to={`/materials`}>
              Materials
            </Link>
          </li>
        )}
        {parentPage && (
          <li>
            <Link className="breadcrumb__item" to={`/materials/${parentPage}`}>
              {toTitleCase(parentPage)}
            </Link>
          </li>
        )}
        {currentPage && (
          <li className="breadcrumb__item breadcrumb__item--current">
            {toTitleCase(currentPage)}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
