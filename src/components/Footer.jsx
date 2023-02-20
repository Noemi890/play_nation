import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-900 max-w-full h-14 flex justify-end w-full items-center drop-shadow-lg fixed z-50 bottom-0">
      <a
        href="https://github.com/Noemi890"
        rel="noreferrer"
        target="_blank"
        className="text-slate-300 m-4 hover:scale-125 transition duration-500 ease-in-out hover:text-sky-800"
      >
        @Noemi Caggiano
      </a>
    </div>
  );
};

export default Footer;
