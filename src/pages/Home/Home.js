import React, { useMemo } from "react";
import "./Home.scss";
import CookieButton from "../../components/CookieButton";
import ClickCounter from "../../components/ClickCounter";
import LevelCounter from "../../components/LevelCounter";
import AwardsCounter from "../../components/AwardsCounter";

const Home = ({ level, clickedValue, reset, clickInc, awards }) => {
  const levelCounter = useMemo(() => {
    return <LevelCounter level={level} />;
  }, [level]);

  const clickCounter = useMemo(() => {
    return <ClickCounter value={clickedValue} />;
  }, [clickedValue]);

  const awardsCounter = useMemo(() => {
    return <AwardsCounter value={awards.length} />;
  }, [awards.length]);

  return (
    <div className="home">
      <CookieButton onClick={clickInc} />
      <div className="home__item">
        {awardsCounter}
        {clickCounter}
        {levelCounter}
        <button className="home__reset-btn" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Home;
