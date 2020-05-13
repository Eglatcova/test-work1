import React from "react";
import FullName from "./FullName";
import Gender from "./Gender";
import AboutYourself from "./AboutYourself";
import Title from "./Title";
import Button from "./Button";
import "./profile.sass";

const Profile = () => {
  return (
    <div className="profile__container">
      <Title />
      <FullName />
      <Gender />
      <AboutYourself />
      <Button />
    </div>
  );
};

export default Profile;
