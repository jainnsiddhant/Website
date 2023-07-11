import React from 'react';
import "./IntroPage3.css"
import { AiOutlineSearch } from 'react-icons/ai'

const IntroPage3 = () => {
  return (
    <>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://resumegenius.com/wp-content/uploads/resume-for-first-job-500x333.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Resume
              </h2>
              <p className="mt-6 text-gray-600">
                A resume is a concise document that provides a summary of your education, work experience, skills, and qualifications. It serves as a marketing tool to showcase your professional background and abilities to potential employers or recruiters.
              </p>
              <p className="mt-4 text-gray-600">
                <div className='relative md:top-[40%] top-[50%] space-x-2 w-[100%] mx-auto'>
                  <a href='#resume_cards'>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center md:w-auto">
                      Download Resume
                      <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </a>
                  <a href='#resume_table'>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center md:w-auto mt-4">
                      Enhance Resume
                      <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage3;
