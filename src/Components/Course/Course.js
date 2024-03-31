import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import Sections from "./Sections";
import Table from "./Table";
import University from "./University/University";
import data from "../University/data";
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

const Course = () => {
  const scrollToNextSection = () => {
    const exploreSection = document.getElementById("box");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
      // setArrowVisible(false);
    } else {
      console.error("Explore section not found.");
    }
  };
  const cardsRef = useRef(null);
  const sectionsRef = useRef(null);
  const tableRef = useRef(null);
  const [changeUniv, setUniv] = useState(data);
  const cardsVisible = useIntersectionObserver(cardsRef);
  const sectionsVisible = useIntersectionObserver(sectionsRef);
  const tableVisible = useIntersectionObserver(tableRef);
  return (
    <>
      <section id="course">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Top Courses
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          Embark on a journey of education excellence with carefully selected top courses designed to advance your skills and career prospects
          </p>
        </div>

        <motion.div
          className="box"
          initial={{ opacity: 0.5, scale: 0.99 }}
          animate={{
            opacity: cardsVisible ? 1 : 0.99,
            scale: cardsVisible ? 1 : 0.99,
          }}
          transition={{ duration: 0.8 }}
          ref={cardsRef}
        >
          <Cards />
        </motion.div>

        <div id="arrow" class="" onClick={scrollToNextSection}>
          {/* <img src={arrow} className="w-40 h-40 mx-auto mt-6 transform filter invert" /> */}
          <img src={arrow} className="w-40 h-40 mx-auto mt-6 transform filter invert relative" />
              <div className="absolute inset-0 bg-white opacity-0 mix-blend-overlay"></div>
        </div>

        <motion.div
          id="box"
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: sectionsVisible ? 1 : 0.95,
            scale: sectionsVisible ? 1 : 0.85,
          }}
          transition={{ duration: 0.8 }}
          ref={sectionsRef}
        >
          <Sections Univ={changeUniv} setUniv={setUniv} />
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: tableVisible ? 1 : 0.8,
            scale: tableVisible ? 1 : 0.5,
          }}
          transition={{ duration: 0.8 }}
          ref={tableRef}
        >
          <University univdata={changeUniv} id="univtable"/>
        </motion.div>
      </section>
    </>
  );
};

export default Course;
