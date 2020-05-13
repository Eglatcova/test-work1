import React from "react";

const Telephone = () => {
  const telephone = "+7(999)888-77-99";
  return (
    <React.Fragment>
      <a className="navbar__telephone" href="/">
        {telephone}
      </a>
    </React.Fragment>
  );
};

export default Telephone;
