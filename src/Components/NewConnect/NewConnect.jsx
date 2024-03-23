import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../Animation/Animation";
import Banner from "./Banner";
import Section1 from "./Section1";
import UniBuddy from "./Unibuddy";
import Blog from "./Blogs";
import Template from "./Template";
// import Example from "../NewTable/Table";

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

const NewConnect = () => {
  return (
    <>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <Banner />
      </motion.div>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <Section1 />
        {/* <Example/> */}
      </motion.div>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <Template />
      </motion.div>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <UniBuddy />
      </motion.div>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <Blog />
      </motion.div>
    </>
  );
};

export default NewConnect;
