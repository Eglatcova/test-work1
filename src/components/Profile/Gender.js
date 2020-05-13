import React from "react";
import GenderName from "./GenderName";

const Gender = () => {
  const gender = [
    { id: "male", value: "male", text: "Мужчина" },
    { id: "female", value: "female", text: "Женщина" },
  ];
  const renderGender = gender.map((obj, index) => (
    <GenderName
      key={obj.id}
      value={obj.value}
      text={obj.text}
    />
  ));
  const labelText = "Выберите ваш пол:";
  const selectClass = "gender__title";
  return (
    <div>
      <label className={selectClass}>
        {labelText}
        <select>{renderGender}</select>
      </label>
    </div>
  );
};

export default Gender;
