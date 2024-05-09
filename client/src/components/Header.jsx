import React, { useEffect } from "react";
import { FiFilter } from "react-icons/fi";

async function getCommercials() {
  try {
    const response = await fetch("http://localhost:5000/api/commercials");
    if (!response.ok) {
      throw new Error("Failed to fetch commercials");
    }
    const commercials = await response.json();
    console.log("Commercials:", commercials);
  } catch (error) {
    console.error("Error fetching commercials:", error.message);
  }
}

function Header() {
  return (
    <div className="header flex dark:bg-neutral-800 z-[100] sticky top-0">
      {/* Header */}
      <div className="flex w-2/3 items-center ml-4 my-7">
        <img className="logo w-[2rem] mr-4" src="/logo_flower.png" alt="" />
        <div className="md:text-3xl text-1xl text-slate-200">Folkets reklam</div>
      </div>
      {/* Hamburger-menu button */}
      <div className="buttons flex w-2/3 items-center justify-end gap-4 mr-4">
        <button className="hamburger-menu p-[9.5px] bg-slate-200 rounded-md" onClick={() => getCommercials()}>
          <span className="bar bg-slate-800 h-1 w-6 block mb-1 rounded-sm"></span>
          <span className="bar bg-slate-800 h-1 w-6 block mb-1 rounded-sm"></span>
          <span className="bar bg-slate-800 h-1 w-6 block rounded-sm"></span>
        </button>
      </div>
    </div>
  );
}

export default Header;
