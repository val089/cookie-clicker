import React from "react";
import "./Achievements.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Achievements = ({ awards }) => {
  return (
    <div className="awards">
      {awards &&
        awards.map((award) => (
          <div
            className="awards__item"
            key={award.id}
            style={{ color: "#fff" }}
          >
            <FontAwesomeIcon icon={award.icon} className="awards__icon" />
            <p className="awards__text">{award.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Achievements;
