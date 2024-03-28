import React from "react";
import { FiFilter } from "react-icons/fi";

function Header() {
  return (
    <div className="header flex bg-black z-[100] sticky top-0">
      {/* Header */}
      <div className="flex w-1/3 items-center ml-4 my-7">
        <div className="text-1xl text-slate-200">Folkets reklam</div>
      </div>
      {/* Filter button*/}
      <div className="buttons flex w-2/3 items-center justify-end gap-4 mr-4">
        <button className="flex items-center gap-2 text-1xl p-2 m-2 bg-slate-200 rounded-md">
          Filter
          <FiFilter />
        </button>
        {/* Hamburger-menu button */}
        <button className="hamburger-menu p-[9.5px] bg-slate-200 rounded-md">
          <span className="bar bg-slate-800 h-1 w-6 block mb-1 rounded-sm"></span>
          <span className="bar bg-slate-800 h-1 w-6 block mb-1 rounded-sm"></span>
          <span className="bar bg-slate-800 h-1 w-6 block rounded-sm"></span>
        </button>
      </div>
    </div>
  );
}

export default Header;

{
  /* <div className="Hero relative flex justify-center" style={{ height: "60vh" }}>
        <img className="w-full h-full object-cover" src="./hero.png" alt="Hero" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div> */
}
