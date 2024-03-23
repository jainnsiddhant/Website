import React from "react";
import resumebuilder from "../../images/resumebuilder.jpg";
import scho from "../../images/scho.jpg";
import uk from "../../images/uk.jpg";
import { Link } from "react-router-dom";

const Sections = () => {
  return (
    <>
      <div className="mt-16">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Improve your resume
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Elevate your career prospects with expert tips and insights to
            enhance your resume.
          </p>
        </div>
        <div className="relative mx-auto mt-2 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[60rem] flex-row">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={resumebuilder}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 my-auto">
            <a href="#">
              {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Build Your Resume
                    </h5> */}
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
              Elevate your career prospects with our expert guidance and
              resources tailored to enhance your resume. Discover effective
              strategies and proven tips to refine your professional profile and
              stand out in today's competitive job market
            </p>
            <Link
              to={"/resume"}
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
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Explore Scholarship
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Embark on a journey of educational opportunities with Explore
            Scholarship.
          </p>
        </div>
        <div className="relative mx-auto mt-2 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[60rem] flex-row">
          <div className="relative order-2 w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={scho}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 order-1 my-auto">
            <div>
              {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Explore Scholarship
                    </h5> */}
            </div>
            <p className="mb-3 font-normal text-gray-700 ">
              Welcome to our Scholarship Hub! Explore a world of opportunities
              and unlock your academic potential with our diverse range of
              scholarship programs tailored to your educational journey.
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
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Settel in UK
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Embark on a journey of educational opportunities with Explore
            Scholarship.
          </p>
        </div>
        <div className="relative mx-auto mt-2 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[60rem] flex-row">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={uk}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 my-auto">
            {/* <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      Settel in UK
                    </h5>
                  </a> */}
            <p className="mb-3 font-normal text-gray-700 ">
              Welcome to Settle in the UK - Your Gateway to Seamless Residency
              and Integration. Discover Expert Guidance and Resources for a
              Smooth Transition to Life in the UK.
            </p>
            <Link
              to={"/SettleinUK"}
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
    </>
  );
};

export default Sections;
