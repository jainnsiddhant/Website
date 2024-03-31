import React, { useRef , useEffect, useState } from "react";
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

const useIntersectionObserver = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

export default function Cards() {
  const cardsRef = useRef(null);
  const sectionsRef = useRef(null);
  const tableRef = useRef(null);

  const cardsVisible = useIntersectionObserver(cardsRef);
  const sectionsVisible = useIntersectionObserver(sectionsRef);
  const tableVisible = useIntersectionObserver(tableRef);

  return (
    
    <>
      <section className="w-full mx-auto" id="features">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: cardsVisible ? 1 : 0.8, scale: cardsVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={cardsRef}
        >
          <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2 data-aos='fade-right' className='mb-3 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
              What We Offer
            </h2>
            <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Welcome to our complete guide to settling in the UK
            </p>
          </div>
          
          </motion.div>
          <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: cardsVisible ? 1 : 0.8, scale: cardsVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={cardsRef}
        >

          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 px-4 lg:px-0 mx-auto mb-10">
            <div className="flex gap-2 md:gap-4 items-center">
              <img src={research} alt="research-image" style={{height:150 , width:150}} className="hidden md:flex my-auto" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0 mx-auto">

                {/* Resume Card */}
                <a href="/resume">
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${resumehome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-3xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Resume Build</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' , height:50 , width:200}}>
                      Create Your Winning Resume
                      </p>
                    </div>
                  </div>
                </motion.div>
                </a>

                {/* Scholars Card */}
                <a href="/scholarship">
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${scholarhome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-3xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Scholarship</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' , height:50 , width:200}}>
                      Find information regarding Scholarships
                      </p>
                    </div>
                  </div>
                </motion.div>
                </a>

                {/* Courses Card */}
                <a href="/course">
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coursehome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-3xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Courses</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' , height:50 , width:200}}>
                      Tailored Course Selection

                      </p>
                    </div>
                  </div>
                </motion.div>
                </a>
              </div>
            <img src={search} alt="search-image" style={{height:100 , width:100}} className="hidden md:block" />
            </div>

          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 px-4 lg:px-0 mx-auto mt-10">
            <div className="flex gap-2 md:gap-4 items-center">
              <img src={working} alt="working-image" style={{height:150 , width:150}} className="my-auto hidden md:flex" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0 mx-auto">

                {/* Connect Card */}
                <a href="/blog">
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${connecthome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-3xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Connect</h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' , height:50 , width:200}}>
                      Build Your Network

                      </p>
                    </div>
                  </div>
                </motion.div>
                </a>

                {/* Settle Card */}
                <a href="/SettleinUK">
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${settlehome})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-3xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Settle in 
                      <span className="text-black  bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent text-3xl"> UK</span>
                      </h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' , height:50 , width:200}}>
                      Your UK Relocation Guide

                      </p>
                    </div>
                  </div>
                </motion.div>
                </a>

                {/* Already Card */}
                <a href="/AlreadyinUk">
                <motion.div whileHover={{ scale: 1.25 }}>
                  <div className="relative  flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${scholarhome}) `}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                    <div className="relative p-6 mt-10">
                      <h2 className="text-3xl font-semibold text-white mb-4 text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Already in 
                      <span className="text-black  bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent text-3xl"> UK</span>
                      </h2>
                      <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' , height:50 , width:200}}>
                      Navigating UK Living
                      
                      </p>
                    </div>
                  </div>
                </motion.div>
                </a>
              </div>
            <img src={atjob} alt="atjob-image" style={{height:100 , width:100}} className="hidden md:block" />
            </div>

          </div>
        </motion.div>
      </section>
    </>
  );
}