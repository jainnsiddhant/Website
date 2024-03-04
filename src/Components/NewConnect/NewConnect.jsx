import React, { useRef , useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { textAnimation } from "../Animation/Animation";
import Banner from "./Banner";
import Section1 from "./Section1";
import UniBuddy from "./Unibuddy";
import Blog from "./Blogs";
import Template from "./Template";

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

  const banRef = useRef(null);
  const featuredblogsRef = useRef(null);
  const UniBuddyRef = useRef(null);
  const connectambassadorRef = useRef(null);
  const tempRef = useRef(null);

  const banVisible = useIntersectionObserver(banRef);
  const featuredblogsVisible = useIntersectionObserver(featuredblogsRef);
  const UniBuddyVisible = useIntersectionObserver(UniBuddyRef);
  const tempVisible = useIntersectionObserver(tempRef);
  const connectambassadorVisible = useIntersectionObserver(connectambassadorRef);

    return (
        <>
        <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <Banner />
</motion.div>
            <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: connectambassadorVisible ? 1 : 0, scale: connectambassadorVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={connectambassadorRef}
        >
            <Section1 />
</motion.div>
            <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: tempVisible ? 1 : 0, scale: tempVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={tempRef}
        >
            <Template />
</motion.div>
            <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: UniBuddyVisible ? 1 : 0, scale: UniBuddyVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={UniBuddyRef}
        >
            <UniBuddy />
</motion.div>
            <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: banVisible ? 1 : 0, scale: banVisible ? 1 : 0.5 }}
          transition={{ duration: 0.8 }}
          ref={banRef}
        >
            <Blog />
</motion.div>
        </>
    )
}

export default NewConnect