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
    <div id="connectambassador" className="flex flex-col sm:flex-row md:flex-row w-full md:w-[90%] mx-auto mb-5 mt-10">
      {/* Left Section */}
      <div className="relative md:w-1/4 text-center">
        <Section1Left />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/4 mt-4 md:mt-0 md:ml-4">            
      <Section1Right />
      </div>
    </div>
  );
};

export default Section1;
