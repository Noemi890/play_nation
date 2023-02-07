import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Game from './pages/Game'

function App() {
  return (
    <div className="App text-center min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/game' element={<Game />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
