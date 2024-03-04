import React, { useRef , useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { textAnimation } from "../Animation/Animation";
import Banner from "./Banner";
import Templates from "./Templates";
import Template from "./Template";
import Table from "./Table"


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

const NewResume = () => {

  const bannerRef = useRef(null);
  const resumebuildRef = useRef(null);
  const tableRef = useRef(null);
  const templateRef = useRef(null);

  const cardsVisible = useIntersectionObserver(bannerRef);
  const sectionsVisible = useIntersectionObserver(resumebuildRef);
  const tableVisible = useIntersectionObserver(tableRef);
  const templateVisible = useIntersectionObserver(templateRef);

    return (
        <>
        
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: cardsVisible ? 1 : 0, scale: cardsVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={bannerRef}
        >
            <Banner />
</motion.div>
            <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: sectionsVisible ? 1 : 0, scale: sectionsVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={resumebuildRef}
        >
            <Templates />
</motion.div>
            <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: templateVisible ? 1 : 0, scale: templateVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={templateRef}
        >
            <Template />
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
        </>
    )
}

export default NewResume