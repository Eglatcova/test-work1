import React from "react";

const GenderName = (props) => {
  return <option value={props.value}>{props.text}</option>;
};

export default GenderName;
