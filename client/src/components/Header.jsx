import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="dark:bg-neutral-800 text-white sticky top-0 z-50">
      <div className="p-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img className="logo md:w-[1.5rem] w-[1rem] mr-4" src="/pink_logo.png" alt="" />
          </a>
          <a href="/" className="md:text-2xl text-1xl text-slate-200">
            Folkets reklam
          </a>
        </div>
        <button onClick={toggleMenu} className="text-white focus:outline-none hover:bg-neutral-700 p-2 rounded-xl">
          <svg className="md:h-10 md:w-10 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`absolute top-full left-0 w-full dark:bg-neutral-700 z-50 overflow-hidden transition-height duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-5 text-white block text-center text-4xl">
          <ul className="space-y-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Hem
              </a>
            </li>
            <li>
              <a href="/om" className="hover:text-gray-300">
                Om oss
              </a>
            </li>
            <li>
              <a href="kontakt" className="hover:text-gray-300">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
