import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactModal from "react-modal";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Game from "./pages/Game";
import gamesData from "./data/games.json"

ReactModal.setAppElement("#root");

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const findCategories = () => {
    const categories = []
    gamesData.games.map(game => {
      for (let i = 0; i < game.genre.length; i++) {
        if (categories.includes(game.genre[i])) continue
        categories.push(game.genre[i])
      }
      return <></>
    })
    console.log(categories)
    return categories
  }

  const categories = findCategories()

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App text-center min-h-screen flex flex-col">
      <Header setIsOpen={setIsOpen} isOpen={isOpen}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Categories"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {
          categories.map((category, i) => {
            return (
              <div key={i}>
                <p>{category}</p>
              </div>
            )
          })
        }
      </ReactModal>
      <Footer />
    </div>
  );
}

export default App;
