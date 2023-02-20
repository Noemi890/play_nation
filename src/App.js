import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Game from "./pages/Game";
import gamesData from "./data/games.json";

ReactModal.setAppElement("#root");

function App() {
  const [games, setGames] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setGames(gamesData.games)
  }, [])

  const handleHomeClick = () => {
    setGames(gamesData.games)
    navigate("/");
  };

  const findCategories = () => {
    const categories = [];
    gamesData.games.map((game) => {
      for (let i = 0; i < game.genre.length; i++) {
        if (categories.includes(game.genre[i])) continue;
        categories.push(game.genre[i]);
      }
      return <></>;
    });
    return categories;
  };

  const categories = findCategories();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (e) => {
    const category = e.target.value
    const mappedGames = []
    games.forEach(game => {
      if (game.genre.includes(category)) {
        mappedGames.push(game)
      }
    })
    setIsOpen(!isOpen)
    setGames(mappedGames)
  }

  return (
    <div className="App text-center min-h-screen flex flex-col">
      <Header setIsOpen={setIsOpen} isOpen={isOpen} handleHomeClick={handleHomeClick}/>
      <Routes>
        <Route path="/" element={<Main games={games}/>} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Categories"
        className="mymodal max-w-3xl flex flex-wrap p-12 gap-8 text-slate-300"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {categories.map((category, i) => {
          return (
            <button
              key={i}
              className="flex flex-row text-xl hover:scale-125 transition duration-500 ease-in-out hover:text-sky-800"
              value={category}
              onClick={(e) => handleCategoryClick(e)}
            >
              {category}
            </button>
          );
        })}
      </ReactModal>
      <Footer />
    </div>
  );
}

export default App;
