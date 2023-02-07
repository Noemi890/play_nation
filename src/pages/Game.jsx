import React from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  const game = location.state;

  console.log(game);
  return (
    <>
      <div
        className="flex grow flex-col bg-cover bg-top blur-sm relative overflow-hidden"
        style={{ backgroundImage: `url(${game.background_image})` }}
      ></div>

      <div
        className="fixed top-28 left-32 bg-black/70 flex p-3 rounded-lg flex-col h-auto"
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
          <span className="text-slate-300 text-5xl self-center">{game.name}</span>
          <span className="text-slate-300 text-2xl self-center">{game.release_date}</span>
        </div>
        <div className="flex flex-row justify-around mt-6">
          <div className="text-md w-7/12 text-slate-300">
          <p>{game.description}</p>
          </div>
          <ul className="text-slate-300 flex flex-col">
            <li className="text-slate-300 flex">Genre:&nbsp;{
              game.genre.map((g, i) => {
                return <li key={i}>{`"${g}"`}&nbsp;</li>
              })
              }</li>
            <li>Platform:&nbsp;{
              game.platforms.map((p, i) => {
                return <li key={i}>{p}&nbsp;</li>
              })
              }</li>
          </ul>
        </div>
        <div className="flex justify-self-end self-center">
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
