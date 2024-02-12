import React from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import kartikey from "../../images/Kartikey.jpg";
import siddhant from "../../images/sidhanth.jpeg";
import prisha from "../../images/prisha.jpg";
import monika from "../../images/monika.jpeg";
import manoj from "../../images/manoj.jpeg";
import khushi from "../../images/khushi.jpeg";
import NewFooter from "../NewFooter/NewFooter";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Meet Our dynamic team
              </h2>
              <p className="mt-6 text-gray-600">
                Welcome to{" "}
                <i>
                  <b>Find My Uni</b>
                </i>
                , your ultimate destination for exploring the rankings of top
                universities worldwide, deciphering the differences between
                universities based on QS and Guardian rankings, and assisting
                students in finding scholarships and much more. Allow us to
                introduce the dedicated team behind this initiative:
              </p>
            </div>
          </div>
        </div>
      </div>

      <>
        {/* component */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">
              We have the best equipment
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Check our awesome team members
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={siddhant}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Mr. Siddhant Jain
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Founder and CEO
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={kartikey}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Mr. Kartikey Bhardwaj
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Founding Team Member, Lead Backend devloper
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={prisha}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Miss. Prisha Thapar
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Founding Team Member, Lead Frontend devloper
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={manoj}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Mr. Manoj Jain
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Company Advisor
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={monika}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Mrs. Monika Jain
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Company Advisor
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={khushi}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Miss. Khushi Jain
                </p>
                <p className="text-base text-gray-400 font-normal">
                  Company Advisor
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
      <NewFooter />
    </>
  );
};

export default About;
