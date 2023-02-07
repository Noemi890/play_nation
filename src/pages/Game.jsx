import React from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  const game = location.state;

  console.log(game);
  return (
    <>
      <div
        className="flex grow flex-col bg-cover bg-top blur-sm relative"
        style={{ backgroundImage: `url(${game.background_image})` }}
      ></div>

      <div
        className="fixed top-28 left-32 bg-black/70 flex p-3 rounded-lg flex-col"
        style={{ width: "80vw", height: "75vh" }}
      >
        <div className="flex justify-between">
          <div style={{ width: "13.5rem"}}>
          <img
            className="rounded-md"
            src={game.background_image}
            alt={game.name}
          />
          </div>
          <span className="text-slate-300 text-5xl">{game.name}</span>
          <span className="text-slate-300 text-2xl">{game.release_date}</span>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="text-md w-1/2 text-slate-300">
          <p>{game.description}</p>
          </div>
          <ul>
            <li>Genre: {
              game.genre.map((g, i) => {
                return <li key={i}>{g}</li>
              })
              }</li>
            <li>Platform: {
              game.platforms.map((p, i) => {
                return <li key={i}>{p}</li>
              })
              }</li>
          </ul>
        </div>
        <div>
        <a
        className="text-slate-300 text-2xl mt-12 max-w-4xl hover:scale-125 transition duration-500 ease-in-out hover:text-sky-800"
        href={game.website}
        target="_blank"
        rel="noreferrer"
      >
        Want to know more? Click Here!
      </a>
        </div>
      </div>
    </>
  );
};

export default Game;
