import React from "react";
import confused from "../assets/confused.gif";
import { Card } from "./Card";

const Main = ({ games }) => {
  return (
    <>
      {games.length !== 0 ? (
        <main className="m-5 z-40 pb-14">
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "5px",
              rowGap: "20px",
            }}
          >
            {games.map((game, i) => {
              return <Card key={i} game={game} />;
            })}
          </div>
        </main>
      ) : (
        <main className="flex justify-center items-center">
        <div className="flex flex-col w-full h-full text-slate-300 text-4xl pt-2.5">
          <img className=" flex self-center max-w-xl pb-8" src={confused} alt="confused" />
          <p>Uh-Oh, no Games here!</p>
          <p>Try with something else!</p>
        </div>
        </main>
      )}
    </>
  );
};

export default Main;
