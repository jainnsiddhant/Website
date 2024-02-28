import React, { useState } from "react";
import ambassador from '../../images/ambassador.jpg'
import Kartikey from '../../images/Kartikey.jpg'
import Prisha from '../../images/prisha.png'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import university from '../../images/university.jpg'
import harvard from '../../images/harvard.jpg'
import Section1Left from "./Section1Left";
import Section1Right from "./Section1Right";

const Section1 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section id="connectambassador">
    <div className="py-4 px-4 mt-10">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center'>
                        Student Ambassadors
                    </h2>   
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 text-center w-full">
                        Welcome to our comprehensive guide!
                    </p>      
        </div>
    <div  className="flex flex-col sm:flex-row md:flex-row w-full md:w-[90%] mx-auto mb-5 mt-10">
      
      {/* Left Section */}
      <div className="relative md:w-1/4 text-center">
        <Section1Left />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/4 mt-4 md:mt-0 md:ml-4">            
      <Section1Right />
      </div>
    </div>
    </section>
  );
};

export default Section1;
