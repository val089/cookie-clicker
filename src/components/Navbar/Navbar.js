import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ opened, closeMenu }) => {
  const styles = {
    left: opened ? "0%" : "-100%"
  };

  return (
    <nav className="navbar" style={styles}>
      <ul className="navbar__items-list">
        <li className="navbar__item" onClick={closeMenu}>
          <NavLink
            exact
            to="/"
            className="navbar__link"
            activeClassName="navbar__link--active"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar__item" onClick={closeMenu}>
          <NavLink
            exact
            to="/achievements"
            className="navbar__link"
            activeClassName="navbar__link--active"
          >
            Achievements
          </NavLink>
        </li>
        <li className="navbar__item" onClick={closeMenu}>
          <NavLink
            exact
            to="/shop"
            className="navbar__link"
            activeClassName="navbar__link--active"
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
