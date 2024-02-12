import React, { useState } from "react";
import ambassador from '../../images/ambassador.jpg'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import university from '../../images/university.jpg'
import harvard from '../../images/harvard.jpg'

const StudentAmbassador = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row md:flex-row w-full md:w-[90%] mx-auto mb-5">
      {/* Left Section */}
      <div className="relative md:w-1/4 text-center">
        {/* Dropdown Button */}
        <button
          id="dropdownBgHoverButton"
          className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          onClick={toggleDropdown}
          type="button"
        >
          Search University
          <svg
            className={`w-2.5 h-2.5 ms-3 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownBgHover"
          className={`${
            isDropdownOpen ? 'block' : 'hidden'
          } absolute left-0 mt-2 w-full md:w-48 md:left-auto bg-white rounded-lg shadow-lg`}
        >
          <ul className="p-3 space-y-1 text-sm text-gray-700">
            <li>
              <div className="flex items-center p-2 rounded hover:bg-gray-200">
                <input
                  id="checkbox-item-4"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="checkbox-item-4"
                  className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                >
                  Harvard
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded hover:bg-gray-200">
                <input
                  id="checkbox-item-4"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="checkbox-item-4"
                  className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                >
                  Oxford
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded hover:bg-gray-200">
                <input
                  checked
                  id="checkbox-item-5"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="checkbox-item-5"
                  className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                >
                  Waterloo
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded hover:bg-gray-200">
                <input
                  id="checkbox-item-6"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="checkbox-item-6"
                  className="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                >
                  Stanford
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/4 mt-4 md:mt-0 md:ml-4">

         <div className="text-xl mt-2 mb-4">Student Ambassadors</div>

         {/* Search Button */}
         <div className="mb-10">
         <form>   
           <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
             <div class="relative">
               <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                 <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                 </svg>
               </div>
               <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-400 focus:border-blue-400" placeholder="Search Mockups, Logos..." required />
               <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
         </form>
         </div>
         
         {/* Ambassador List */}
            <div class="flex mt-5 gap-2.5">
                <img class="w-20 h-20 rounded-full" src={ambassador} alt="Jese image" />
                <div class="flex flex-col w-full max-w-[320px] leading-1.5">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-l font-semibold text-gray-900">Bonnie Green</span>
                    </div>
                    <p class="text-sm font-normal py-2 text-gray-900"> That's awesome. I think our users will really appreciate the improvements.</p>
                    <span class="text-sm font-normal text-gray-500">Oxford University</span>
                </div>
            </div>

            <div class="flex mt-5 gap-2.5">
                <img class="w-20 h-20 rounded-full" src={ambassador} alt="Jese image" />
                <div class="flex flex-col w-full max-w-[320px] leading-1.5">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-l font-semibold text-gray-900">Bonnie Green</span>
                    </div>
                    <p class="text-sm font-normal py-2 text-gray-900"> That's awesome. I think our users will really appreciate the improvements.</p>
                    <span class="text-sm font-normal text-gray-500">Oxford University</span>
                </div>
            </div>

            <div class="flex mt-5 gap-2.5">
                <img class="w-20 h-20 rounded-full" src={ambassador} alt="Jese image" />
                <div class="flex flex-col w-full max-w-[320px] leading-1.5">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-l font-semibold text-gray-900">Bonnie Green</span>
                    </div>
                    <p class="text-sm font-normal py-2 text-gray-900"> That's awesome. I think our users will really appreciate the improvements.</p>
                    <span class="text-sm font-normal text-gray-500">Oxford University</span>
                </div>
            </div>
            
         {/* Unibuddy */}
         <div className="text-xl mt-10 mb-4">Unibuddy</div>
        
         <div className="mt-5">
            <h3>Student-to-student marketing is the future</h3>
            <button type="button" class="bg-blue-500 hover:bg-blue-600 font-medium rounded-lg px-5 py-2.5 text-white mt-4">Go to App</button>
         </div>


         {/* Contact Me */}
         <div className="text-xl mt-10 mb-4">Contact Me</div>

         <div className="flex flex-col">
            <div className="flex flex-row w-[80%] mt-2 mb-2">
                <div className="text-left w-1/2 flex gap-x-3">
                    <span className="text-xl bg-slate-200 rounded-full w-8 h-8 items-center justify-center flex"><MdOutlineEmail /></span>
                    <span>Email</span>
                </div>
                <div className="text-right w-1/2">abc@gmail.com</div>
            </div>
         </div>

         <div className="flex flex-col">
            <div className="flex flex-row w-[80%] mt-2 mb-2">
                <div className="text-left w-1/2 flex gap-x-3">
                    <span className="text-xl bg-slate-200 rounded-full w-8 h-8 items-center justify-center flex"><FaWhatsapp /></span>
                    <span>WhatsApp</span>
                </div>
                <div className="text-right w-1/2">0123456789</div>
            </div>
         </div>

         <div className="flex flex-col">
            <div className="flex flex-row w-[80%] mt-2 mb-2">
                <div className="text-left w-1/2 flex gap-x-3">
                    <span className="text-xl bg-slate-200 rounded-full w-8 h-8 items-center justify-center flex"><FiClock /></span>
                    <span>Schedule a call</span>
                </div>
                <div className="text-right w-1/2">
                <button type="button" class="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5">Default</button>
                </div>
            </div>
         </div>

         {/* Contact Me */}
         <div className="text-xl mt-10">Featured Blogs</div>

         <div className="flex flex-col mt-5">
            <div className="flex flex-row w-[80%] mt-2 mb-2">
                <div className="text-left w-1/2 flex flex-col gap-x-3">
                    <h1 className="text-lg font-bold">Top 10 Universities in the world</h1>
                    <p className="text-sm mt-3">A comprhensive guide to top 10 universities in the world.</p>
                    <button type="button" class="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3">Read More</button>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img src={university} alt="universityimage" />
                </div>
            </div>
         </div>

         <div className="flex flex-col mt-5">
            <div className="flex flex-row w-[80%] mt-2 mb-2">
                <div className="text-left w-1/2 flex flex-col gap-x-3">
                    <h1 className="text-lg font-bold">Student Life at Harvard</h1>
                    <p className="text-sm mt-3">Discover the vibrant student life at Harvard University.</p>
                    <button type="button" class="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3">Read More</button>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img src={harvard} alt="universityimage" />
                </div>
            </div>
         </div>


      </div>
    </div>
  );
};

export default StudentAmbassador;
