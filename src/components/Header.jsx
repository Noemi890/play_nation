import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";

const Header = () => {
  
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCategoryClick = () => {
    
  };

  return (
    <div className="bg-zinc-900 max-w-full h-24 flex justify-between items-center drop-shadow-lg sticky z-50 top-0">
      <div className="flex flex-row pl-5">
        <div className="w-20 hover:animate-spin">
          <Logo />
        </div>
        <div>
          <h3 className=" text-slate-300 text-4xl pt-2.5">Play_Nation</h3>
        </div>
      </div>
      <div>
        <form className="gap-3 flex">
          <input
            style={{ width: "40rem", height: "2rem" }}
            className="rounded-xl p-2"
            type="text"
            placeholder="search your games here"
          />
          <button
            type="submit"
            value="submit"
            className="text-slate-300 text-2xl hover:scale-125 transition duration-500 ease-in-out hover:text-sky-800"
          >
            search
          </button>
        </form>
      </div>
      <nav className="pr-6 gap-9 flex">
        <button
          onClick={handleHomeClick}
          className="text-slate-300 text-2xl hover:scale-125 transition duration-500 ease-in-out hover:text-sky-800 cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={handleCategoryClick}
          className="text-slate-300 text-2xl hover:scale-125 transition duration-500 ease-in-out hover:text-sky-800 cursor-pointer"
        >
          Categories
        </button>
      </nav>
    </div>
  );
};

export default Header;
