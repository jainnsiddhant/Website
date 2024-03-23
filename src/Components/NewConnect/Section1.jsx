import React, { useState } from "react";
import Section1Left from "./Section1Left";
import Section1Right from "./Section1Right";
import Example from "../NewTable/Table";

const Section1 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section id="connectambassador">
      <div className="py-4 px-4 mt-10">
        <h2
          data-aos="fade-right"
          className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center"
        >
          Student Ambassadors
        </h2>
        <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 text-center w-full">
          Welcome to our comprehensive guide!
        </p>
      </div>
      {/* <div className="flex flex-col sm:flex-row md:flex-row w-full md:w-[90%] mx-auto mb-5 mt-10">
        <div className="relative md:w-1/4 text-center">
          {isDropdownOpen && <Section1Left />}
          <button
            onClick={toggleDropdown}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {isDropdownOpen ? "Hide Filter" : "Show Filter"}
          </button>
        </div>
        <div className="w-full md:w-3/4 mt-4 md:mt-0 md:ml-4">
          <Section1Right />
        </div>/
      </div> */} 
      <Example/>
    </section>
  );
};

export default Section1;
