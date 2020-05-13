import React from "react";

const MenuItem = (props) => {
  return (
    <a className={props.className} href={props.href}>
      {props.name}
    </a>
  );
};

export default MenuItem;
