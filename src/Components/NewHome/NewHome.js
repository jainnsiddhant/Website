import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../Animation/Animation";
import Cards from "./Cards";
import harvard from "../../images/4133580.jpg";
import GoldmanSachs from "../../images/4204968.jpg";
import oxford from "../../images/4261198.jpg";
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

const NewHome = () => {
  const cardsRef = useRef(null);
  const sectionsRef = useRef(null);
  const tableRef = useRef(null);
  const [arrowVisible, setArrowVisible] = useState(true);

  const cardsVisible = useIntersectionObserver(cardsRef);
  const sectionsVisible = useIntersectionObserver(sectionsRef);
  const tableVisible = useIntersectionObserver(tableRef);

  const scrollToNextSection = () => {
    const exploreSection = document.getElementById("explore");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
      setArrowVisible(false);
    } else {
      console.error("Explore section not found.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const exploreSection = document.getElementById("explore");
      if (exploreSection) {
        const rect = exploreSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setArrowVisible(false);
        } else {
          setArrowVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="relative pt-5 ml-auto">
            <motion.div
              variants={textAnimation}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <div className="lg:w-2/3 text-center mx-auto">
                <h1 className="text-gray-900 font-bold text-4xl md:text-6xl xl:text-7xl mt-20">
                Let's Begin Your Journey to the{" "}
                  <span className="text-black  bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                    United Kingdom
                  </span>
                </h1>
                <p className="mt-5 text-gray-700 ">
                Your one-stop destination to help you overcome your obstacles and achieve your goals as an International student
                </p>
              </div>
            </motion.div>

            <div id="arrow" class="container" onClick={scrollToNextSection}>
              <img src={arrow} className="w-10 mx-auto mt-6" />
            </div>

            <div id="explore" className="">
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: cardsVisible ? 1 : 0.8,
                  scale: cardsVisible ? 1 : 0.5,
                }}
                transition={{ duration: 0.8 }}
                ref={cardsRef}
              >
                <div
                  className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-10"
                  id="topuni"
                >
                  <h2
                    data-aos="fade-right"
                    className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl mt-10"
                  >
                    Discover Top Universities and Courses in{" "}
                    <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                      United Kingdom
                    </span>
                  </h2>
                  <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    Check out top courses and most reputed universities in the
                    world
                  </p>
                </div>
                <div className="space-y-6 max-w-5xl md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-5 w-[90%] mx-auto">
                  <motion.div
                    whileHover={{
                      scale: 1.5,
                    }}
                  >
                    <div className="w-[2xl] bg-white">
                      <a href="/course">
                        <img
                          className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                          src={oxford}
                          alt="image university"
                          style={{ height: 200, width: 350 }}
                        />
                      </a>
                      <div className="p-4">
                        <a href="/course">
                          <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900 text-center">
                            Top 10 Universities
                          </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base text-center">
                        Hallmark of Excellence
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.5,
                    }}
                  >
                    <div className="w-[2xl] bg-white">
                      <a href="/course">
                        <img
                          className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                          src={GoldmanSachs}
                          alt="image university"
                          style={{ height: 200, width: 350 }}
                        />
                      </a>
                      <div className="p-4">
                        <a href="/course">
                          <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900 text-center">
                            Subject-Wise List
                          </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base text-center">
                        Find your niche                        
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.5,
                    }}
                  >
                    <div className="w-[2xl] bg-white">
                      <a href="/course">
                        <img
                          className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                          src={harvard}
                          alt="image university"
                          style={{ height: 200, width: 350 }}
                        />
                      </a>
                      <div className="p-4">
                        <a href="/course">
                          <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900 text-center">
                            Top Courses
                          </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base text-center">
                        Shape Career Path
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="md:flex p-6 md:flex-row space-y-7 md:space-y-0 justify-between">
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHome;
