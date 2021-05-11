import React from "react";
import PropTypes from "prop-types";
import "./AwardsCounter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const AwardsCounter = ({ value }) => {
  return (
    <div className="awards-counter">
      <FontAwesomeIcon icon={faTrophy} className="awards-counter__icon" />
      <span className="awards-counter__title">{value}</span>
    </div>
  );
};

AwardsCounter.propTypes = {
  value: PropTypes.number
};

export default AwardsCounter;
