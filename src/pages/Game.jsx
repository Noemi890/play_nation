import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  const game = location.state;
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate("/")
  }

  return (
      <div
        className="flex grow flex-col bg-cover bg-top relative justify-center items-center pb-14">

      <div className="w-full h-full fixed bg-cover" style={{ backgroundImage: `url(${game.background_image})`, filter:"blur(8px)"}}></div>

      <div
        className=" relative bg-black/70 flex p-3 rounded-lg flex-col h-auto w-3/4"
      >
        <div className="flex justify-between mb-4">
          <div style={{ width: "13.5rem" }}>
            <img
              className="rounded-md"
              src={game.background_image}
              alt={game.name}
            />
          </div>
          <span className="text-slate-300 text-5xl self-center">
            {game.name}
          </span>
          <span className="text-slate-300 text-2xl self-center">
            {game.release_date}
          </span>
        </div>
        <div className="flex flex-row justify-around mt-6">
          <div className="text-md w-7/12 text-slate-300">
            <p>{game.description}</p>
          </div>
          <ul className="text-slate-300 flex flex-col">
            Genre:
            {game.genre.map((g, i) => {
              return <li key={i}>{g}</li>;
            })}
          </ul>
          <ul className="text-slate-300 flex flex-col">
            Platform:
            {game.platforms.map((p, i) => {
              return <li key={i}>{p}</li>;
            })}
          </ul>
        </div>
        <div className="flex justify-around w-full">
          <button className="text-slate-300 text-2xl mt-12 max-w-4xl hover:scale-125 transition duration-500 ease-in-out hover:text-sky-800" onClick={handleBackClick}>{"<- Back"}</button>
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
      </div>
  );
};

export default Game;
