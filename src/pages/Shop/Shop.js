import React from "react";
import PropTypes from "prop-types";
import "./Shop.scss";

const Shop = ({ title }) => {
  return (
    <div className="shop">
      <h1 className="shop__title">{title}</h1>
    </div>
  );
};

Shop.defaultProps = {
  title: "Available Soon"
};

Shop.propTypes = {
  title: PropTypes.string
};

export default Shop;
