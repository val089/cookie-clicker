import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie } from "@fortawesome/free-solid-svg-icons";
import "./CookieButton.scss";

const CookieButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cookie-btn">
      <FontAwesomeIcon icon={faCookie} className="cookie-btn__icon" />
    </button>
  );
};

export default CookieButton;
