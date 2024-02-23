import React from "react";
import { motion } from 'framer-motion';
import { textAnimation } from "../Animation/Animation";
import resumehome from "../../images/resumehome.jpg";
import scholarhome from "../../images/scholarhome.jpg";
import coursehome from "../../images/coursehome.jpg";
import connecthome from "../../images/connecthome.jpg";
import settlehome from "../../images/settlehome.jpg";
import alreadyhome from "../../images/alreadyhome.jpg";
import research from "../../images/research.jpg"
import working from "../../images/working.jpg"
import search from "../../images/search.jpg"
import atjob from "../../images/atjob.jpg"

export default function Cards() {
  return (
    <>
      <section className="w-full mx-auto">
        <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
              Our Features
            </h2>
            <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
              Welcome to our comprehensive guide on settling in the UK!
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 px-4 lg:px-0 mx-auto mb-10">
            <div className="flex gap-2 md:gap-4 items-center">
              <img src={research} alt="research-image" style={{height:150 , width:150}} className="hidden md:flex my-auto" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0 mx-auto">

                {/* Resume Card */}
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${resumehome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-4xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Resume</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        Unlock your career potential.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Scholars Card */}
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${scholarhome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-4xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Scholars</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        Unlock your career potential.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Courses Card */}
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coursehome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-4xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Courses</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        Unlock your career potential.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <img src={search} alt="search-image" style={{height:100 , width:100}} className="hidden md:block" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 px-4 lg:px-0 mx-auto mt-10">
            <div className="flex gap-2 md:gap-4 items-center">
              <img src={working} alt="working-image" style={{height:150 , width:150}} className="my-auto hidden md:flex" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0 mx-auto">

                {/* Connect Card */}
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${connecthome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-4xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Connect</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        Unlock your career potential.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Settle Card */}
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${settlehome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-4xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Settle</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        Unlock your career potential.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Already Card */}
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative  flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${scholarhome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-4xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Already</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        Unlock your career potential.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <img src={atjob} alt="atjob-image" style={{height:100 , width:100}} className="hidden md:block" />
          </div>
        </motion.div>
      </section>
    </>
  );
}