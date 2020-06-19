import React, { useState } from "react";

const Names = (props) => {
  const [value, setValue] = useState("");
  const createValue = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };
  const labelClass = "full-name__lable";
  return (
    <label className={labelClass}>
      {props.text}
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        value={value}
        onChange={createValue}
      />
    </label>
  );
};

export default Names;
