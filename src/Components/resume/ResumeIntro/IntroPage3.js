import React from 'react';
import "./IntroPage3.css"
import {AiOutlineSearch} from 'react-icons/ai'
const IntroPage3 = () => {
  return (
    <>
      <div
        className="backgroundcolor bg-blue-700"
      >
        <div className="relative md:top-[50%] top-[40%]">
          <p className='font-extrabold text-3xl text-center text-white'>Build Your Resume</p>
          <p className=" text-center text-white text-lg mt-2 font-semibold">Resume builder helps to build your resume on top of other candidates</p>
          <div className="relative md:w-[50%] w-[95%] mx-auto mt-10">
            {/* <i className="absolute fa fa-search text-gray-400 top-5 left-4" />  */}
            <AiOutlineSearch className='absolute  text-gray-400 top-5 left-4 text-lg'/>
            <input
              type="text"
              className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
              name=""
              placeholder='search'
            />
            <span className="absolute top-4 right-5 border-l pl-4">
              <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage3;