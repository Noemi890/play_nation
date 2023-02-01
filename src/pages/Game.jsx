import React from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  const game = location.state;

  console.log(game);
  return (
    <div className="flex justify-center flex-col place-items-center">
      <h1 className="text-slate-300 text-7xl mt-1.5">{game.name}</h1>
      <img className="w-1/2" src={game.background_image} alt={game.name} />
      <h3 className="text-slate-300 text-5xl mt-10">About:</h3>
      <span className="text-slate-300 text-2xl mt-12 max-w-4xl">
        {game.description}
      </span>

      <span className="text-slate-300 text-2xl mt-12 max-w-4xl">{`Released in ${game.release_date}`}</span>

      <div>
        <h4 className="text-slate-300 text-5xl mt-10">Genre:</h4>
        {game?.genre?.map((g, e) => {
          return (
            <span
              key={e}
              className="text-slate-300 text-2xl mt-12 max-w-4xl"
            >{`"${g}" `}</span>
          );
        })}
      </div>

      <div>
        <h4 className="text-slate-300 text-5xl mt-10">Platforms:</h4>
        {game.platforms.map((p, e) => {
          return (
            <span
              key={e}
              className="text-slate-300 text-2xl mt-12 max-w-4xl"
            >{`"${p}" `}</span>
          );
        })}
      </div>

      <a
        className="text-slate-300 text-2xl mt-12 max-w-4xl hover:scale-125 transition duration-500 ease-in-out hover:text-sky-800"
        href={game.website}
        target="_blank"
        rel="noreferrer"
      >
        Click here for more information
      </a>
    </div>
  );
};

export default Game;
