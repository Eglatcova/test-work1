import React from "react";

const Button = () => {
 const buttonText = "Отправить";
 const buttonClass = "button-send"
  return (
    <React.Fragment>
      <button className={buttonClass}>{buttonText}</button>
    </React.Fragment>
  );
};

export default Button;
