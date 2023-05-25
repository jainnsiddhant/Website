import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [tooglestyle, settooglestyle] = useState("hidden w-full md:block md:w-auto");
  const [tooglestate, settooglestate] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768 && tooglestate === true) {
      settooglestyle("w-full md:block md:w-auto");
    } else {
      settooglestyle("hidden w-full md:block md:w-auto");
    }
  }, [tooglestate, window.innerWidth]);

  return (
    <div className="container">
      <nav className="bg-white p-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Max Webnft</span>
          </a>
          <button
            onClick={() => {
              settooglestate(!tooglestate);
            }}
            data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"
            ></path></svg>
          </button>
          <div className={tooglestyle} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-500 rounded-lg bg-gray-800  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-lg">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-black text-white">Colleges</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-black text-white">Scholarships</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-black text-white">News</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-black text-white">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;