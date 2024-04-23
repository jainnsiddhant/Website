import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../Animation/Animation";
import gre from "../../images/gre.jpeg";
import ielts from "../../images/ielts.jpeg";
import toefl from "../../images/toefl.png";
import IeltsSection from "./IeltsSection";
import GreSection from "./GreSection";
import ToeflSection from "./ToeflSection";
import Community from "./Community";
import arrow from "../../images/arrow.gif";

const useIntersectionObserver = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Adjust threshold as needed
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


const GREs = () => {

  const scrollToNextSection = () => {
    const exploreSection = document.getElementById("box");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
      // setArrowVisible(false);
    } else {
      console.error("Explore section not found.");
    }
  };

  return (
    <>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <section className="items-center justify-center">
          <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2
              data-aos="fade-right"
              className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
            >
              Prepare. Pursue. Prevail.
            </h2>
            {/* <p className="mb-0 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    Unlock Your Path: Essential Guidance for Navigating Life in the UK
                    </p> */}
          </div>

          <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0 mt-2 w-[80%] mx-auto">
            <motion.div
              whileHover={{
                scale: 1.15,
              }}
            >
              <div className="max-w-xs bg-white justify-center items-center mx-auto">
                <a href="#ielts">
                  <img
                    className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                    src={ielts}
                    alt=""
                  />
                </a>
                <div className="p-4">
                  <a href="#ielts">
                    <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                      IELTS
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                    IELTS is a standardised test for non-native speakers to
                    communicate effectively in English for educational and
                    professional opportunities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.15,
              }}
            >
              <div className="max-w-xs bg-white justify-center items-center mx-auto">
                <a href="#gre">
                  <img
                    className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                    src={gre}
                    alt=""
                  />
                </a>
                <div className="p-4">
                  <a href="#gre">
                    <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                      GRE
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                    GRE assesses verbal, quantitative, and analytical writing
                    skills for admission to graduate schools.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
                  whileHover={
                    {
                      scale: 1.15
                    }
                  }>
                   <div className="max-w-xs bg-white justify-center items-center mx-auto">
                     <a href="#toefl">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80" src={toefl} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#toefl">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Banks to Open</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Unlock your financial possibilities with our comprehensive guide to opening banks.</p>
                     </div>
                   </div>
                  </motion.div> */}

            <motion.div
              whileHover={{ scale: 1.15 }}
              className="max-w-xs bg-white justify-center items-center mx-auto relative"
            >
              <a href="#toefl">
                <img
                  className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                  src={toefl}
                  alt=""
                />
              </a>
              <div className="p-4">
                <a href="#toefl">
                  <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                    TOEFL
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                  TOEFL assesses English language proficiency for non-native
                  speakers who want to study in English-speaking universities.
                </p>
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75 rounded-xl opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-white font-bold text-lg">Coming Soon</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      <div id="arrow" class="" onClick={scrollToNextSection}>
          <img src={arrow} className="w-40 h-40 mx-auto mt-6 transform filter invert" />
      </div>

      <motion.div
        id="box"
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <IeltsSection />
      </motion.div>
      {/* <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        > */}
      <GreSection />
      {/* </motion.div> */}
      {/* <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <ToeflSection />
            </motion.div> */}
      {/* <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        > */}
      <Community />
      {/* </motion.div> */}
    </>
  );
};

export default GREs;
