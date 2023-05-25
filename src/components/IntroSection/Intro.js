import React from 'react';
import "./Intro.css"
import {AiOutlineSearch} from 'react-icons/ai'
const Intro = () => {
  return (
    <>
      <div
        className="backgroundimage"
      >
        <div className="relative md:top-[50%] top-[40%]">
          <p className='font-extrabold text-3xl text-center text-white'>Looking for best college that suits you</p>
          <p className=" text-center text-white text-lg mt-2 font-semibold">Search the best college based on your intrest</p>
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

export default Intro;