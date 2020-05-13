import React, { useState } from "react";

const AboutYourself = () => {
  const title = "Информация о вас:";
  const [value, setValue] = useState("Расскажите о себе...");
  const createValue = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };
  const aboutClass = "about-yourself"
  return (
    <label>
      {title}
      <textarea className = {aboutClass} value={value} onChange={createValue} />
    </label>
  );
};

export default AboutYourself;
