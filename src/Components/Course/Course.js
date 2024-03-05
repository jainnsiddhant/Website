import React, { useRef , useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Cards from "./Cards";
import Sections from "./Sections";
import Table from "./Table";

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
  const cardsRef = useRef(null);
  const sectionsRef = useRef(null);
  const tableRef = useRef(null);

  const cardsVisible = useIntersectionObserver(cardsRef);
  const sectionsVisible = useIntersectionObserver(sectionsRef);
  const tableVisible = useIntersectionObserver(tableRef);

  return (
    <>
      <section id="course">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
            Top Course
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Explore the pinnacle of education with our top courses selection, meticulously curated to propel your knowledge and career to new heights.
          </p>
        </div>

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: cardsVisible ? 1 : 0, scale: cardsVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={cardsRef}
        >
          <Cards />
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: sectionsVisible ? 1 : 0, scale: sectionsVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={sectionsRef}
        >
          <Sections />
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: tableVisible ? 1 : 0, scale: tableVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={tableRef}
        >
          <Table />
        </motion.div>

      </section>
    </>
  );
}

export default Course;