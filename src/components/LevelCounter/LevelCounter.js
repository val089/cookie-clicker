import React from "react";
import PropTypes from "prop-types";
import "./LevelCounter.scss";

const LevelCounter = ({ level }) => {
  return (
    <div className="level-counter">
      <h2>LEVEL: {level}</h2>
    </div>
  );
};

LevelCounter.propTypes = {
  level: PropTypes.number
};

export default LevelCounter;
