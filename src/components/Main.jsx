import React from "react";
import gamesData from "../data/games.json"
import {Card} from "./Card";

const Main = () => {

  const games = gamesData.games

  console.log(games)
  return (
    <main className="m-5">
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "10px" }}>
        <Card src={games[0].background_image}/>
        {/* {
          games.map((game, i) => {
            return (
              <Card key={i} src={game}/>
            )
          })
        } */}
      </div>
    </main>
  )
}

export default Main