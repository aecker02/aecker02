import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import slugify from "slugify";
import { useFeaturedMaterials } from "./Featured/featured.hooks";

const Item = ({
  featured_material_title,
  material_parent,
  material_imageSharp
}) => {
  const parentMaterial = material_parent.title.toLowerCase();
  const materialTitle = featured_material_title[0].text;
  const link = `/${slugify(parentMaterial)}/${slugify(
    materialTitle.toLowerCase()
  )}`;

  return (
    <div className="featured-section__item">
      <h3 className="featured-section__title">{materialTitle}</h3>
      <Image fluid={material_imageSharp.childImageSharp.fluid} />
      <Link to={link}>Find out more</Link>
    </div>
  );
};

const Featured = () => {
  const featuredMaterials = useFeaturedMaterials();

  return (
    <div className="featured-section">
      {featuredMaterials.length &&
        featuredMaterials.map((material, index) => (
          <Item key={`item-${index}`} {...material} />
        ))}
    </div>
  );
};

Item.propTypes = {
  featured_material_title: PropTypes.array.isRequired,
  material_parent: PropTypes.object.isRequired,
  material_image: PropTypes.object.isRequired
};

export default Featured;
