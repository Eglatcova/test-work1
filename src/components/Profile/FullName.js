import React from "react";
import Names from "./Names";

const FullName = () => {
  const forms = [
    { id: "name", text: "Имя:", name: "name" },
    { id: "surname", text: "Фамилия:", name: "surname" },
    { id: "age", text: "Дата рождения:", name: "age" },
  ];
  const renderForms = forms.map((obj, index) => (
    <Names
      key={obj.id}
      className={"full-name__input"}
      text={obj.text}
      type={"text"}
      name={obj.name}
    />
  ));

  return <div className="full-name__wrap">{renderForms}</div>;
};

export default FullName;
