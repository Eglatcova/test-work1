import React from "react";
import { Link } from "react-router-dom";

const FooterButton = (props) => {
  return (
    <Link className={props.className} to={props.to}>
      {props.name}
    </Link>
  );
};

export default FooterButton;
