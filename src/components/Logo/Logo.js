import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <FontAwesomeIcon icon={faCookieBite} className="logo__icon" />
      <h1 className="logo__text">CookieClicker</h1>
    </div>
  );
};

export default Logo;
