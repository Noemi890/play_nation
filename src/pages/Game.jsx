import React from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation()
  const game = location.state

  return (
    <div>
      
    </div>
  )
}

export default Game