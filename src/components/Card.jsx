import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/card.css";

export const Card = ({ game }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/game", {state: game})
  }

  return (
    <button className="card_container" onClick={handleClick}>
        <img
          className="card_image"
          src={game.background_image}
          alt="cover_image"
        />
      <span className="card_title">{game.name}</span>
    </button>
  );
};
