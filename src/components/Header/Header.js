import React, { useState } from "react";
import Navbar from "../Navbar";
import Logo from "../Logo";
import "./Header.scss";

const Header = () => {
  const [opened, setOpened] = useState(false);

  const menuToggle = () => {
    setOpened(!opened);
  };

  const styles = {
    bar1: {
      transform: opened && "rotate(-45deg) translate(-9px, 6px)"
    },
    bar2: {
      opacity: opened && 0
    },
    bar3: {
      transform: opened && "rotate(45deg) translate(-8px, -8px)"
    }
  };

  return (
    <header className="header">
      <Logo />
      <Navbar opened={opened} closeMenu={menuToggle} />
      <div className="header__hamburger" onClick={menuToggle}>
        <div className="header__bar1" style={styles.bar1}></div>
        <div className="header__bar2" style={styles.bar2}></div>
        <div className="header__bar3" style={styles.bar3}></div>
      </div>
    </header>
  );
};

export default Header;
