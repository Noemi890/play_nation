import React from "react";
import gamesData from "../data/games.json"
import {Card} from "./Card";

const Main = () => {

  const games = gamesData.games

  console.log(games)
  return (
    <main className="m-5">
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "5px", rowGap: "20px" }}>
        {
          games.map((game, i) => {
            return (
              <Card key={i} game={game}/>
            )
          })
        }
      </div>
    </main>
  )
}

export default Main