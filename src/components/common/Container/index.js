import React from "react";
import "./styles.scss";

//Component Styles

const Container = props => (
  <div className="container">
    <div className="container__inner">{props.children}</div>
  </div>
);

export default Container;
