import React from "react";
import {Card} from "./Card";

const Main = ({ games }) => {
  
  return (
    <main className="m-5 z-40 pb-14">
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "5px", rowGap: "20px"}}>
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