import React from "react";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo, isLazy = true }) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} critical={isLazy === true ? false : true} />
    );
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} critical={isLazy === true ? false : true} />;
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt} critical={isLazy === true ? false : true} />;

  return null;
};

export default PreviewCompatibleImage;
