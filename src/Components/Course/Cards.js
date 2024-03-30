import React from "react";
import { motion } from "framer-motion";
import course from "../../images/course.jpg";
import rank from "../../images/rank.jpg";


const Cards = () => {
  return (
    <>
      <section id="cards">
      
        <div className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-5 mt-5 w-[80%] mx-auto items-center justify-center align-middle">
        <a href="#sections">
          <motion.div
            whileHover={{
              scale: 1.25,
            }}
          >
            <div
              class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
            >
              <img
                class="object-cover w-full h-[50%] rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={course}
                alt=""
                className="h-40 w-40"
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Top Course
                </h5>
                <p class="mb-3 font-normal text-gray-700">
                  
Discover our top courses curated to enhance your skills and advance your career. Explore cutting-edge content and expert instruction tailored to your professional development goals.
                </p>
              </div>
            </div>
          </motion.div>
          </a>
          <a href="#table">
          <motion.div
            whileHover={{
              scale: 1.25,
            }}
          >
            <a
              href="#univtable"
              class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={rank}
                alt=""
                className="h-40 w-40"
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Ranking
                </h5>
                <p class="mb-3 font-normal text-gray-700">
                Explore our comprehensive rankings to discover top performers across various categories, guiding you towards informed decisions and superior choices
                </p>
              </div>
            </a>
          </motion.div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Cards;