import React from "react";
import homebg from "../../images/homebg.jpg";
import harvard from "../../images/harvard.jpg";
import oxford from "../../images/oxford.jpg";
import goldmansachs from "../../images/GoldmanSachs.jpg";
import princeton from "../../images/princeton.jpg";
import interview from "../../images/interview.jpg";
import resume from "../../images/resume.jpg";
import essay from "../../images/essay.jpg";
import profile from "../../images/profile.jpg";
import resumebuilder from "../../images/resumebuilder.jpg";
import scho from "../../images/scho.jpg";
import uk from "../../images/uk.jpg";
import { Link } from "react-router-dom";
const NewIntro = () => {
  return (
    <>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-200 to-purple-500" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-400" />
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900  font-bold text-4xl md:text-6xl xl:text-6xl">
                Ready to take Admission in{" "}
                <span className="text-black  bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  UK
                </span>
              </h1>
              <p className="mt-8 text-gray-700 ">
                Best Place for finding the stuff for you
              </p>
            </div>
            <div className="">
              <div className="text-2xl font-bold justify-center flex mt-24">
                University in United Kingdom
              </div>
              <div className="md:flex p-6 md:flex-row space-y-7 md:space-y-0 justify-between mt-16">
                <Link to={"/university"}>
                  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Top 10 University
                    </h5>
                    <p className="font-normal text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod magnam placeat esse enim nisi ratione!
                    </p>
                  </div>
                </Link>
                <Link to={"/university"}>
                  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Top universities subject wise
                    </h5>
                    <p className="font-normal text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod magnam placeat esse enim nisi ratione!
                    </p>
                  </div>
                </Link>
                <Link to={"/university"}>
                  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Top courses
                    </h5>
                    <p className="font-normal text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod magnam placeat esse enim nisi ratione!
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-16">
              <div className="relative mx-auto mt-12 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[60rem] flex-row">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src={resumebuilder}
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 my-auto">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Build Your Resume
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 ">
                    Get top handpicks resume templates and other usefull links
                    to boost the chance of your selection
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="relative mx-auto mt-12 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[60rem] flex-row">
                <div className="relative order-2 w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src={scho}
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 order-1 my-auto">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Explore Scholarship
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 ">
                    Here's a compilation of the top 10 scholarships offering
                    reductions in tuition fees for students to apply to.
                  </p>
                  <Link
                    to={"/scholarship"}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="relative mx-auto mt-12 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[60rem] flex-row">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src={uk}
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 my-auto">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Settel in UK
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 ">
                    Here is the important things to have for settel in UK to
                    ensure a smooth transition and comfortable living.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewIntro;
