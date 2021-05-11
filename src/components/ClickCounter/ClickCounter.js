import React from "react";
import PropTypes from "prop-types";
import "./ClickCounter.scss";

const ClickCounter = ({ value }) => {
  return (
    <div className="click-counter">
      <h2>CLICKED: {value}</h2>
    </div>
  );
};

ClickCounter.propTypes = {
  value: PropTypes.number
};

export default ClickCounter;
