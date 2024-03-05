import React from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../Animation/Animation";
import Banner from "./Banner";
import Section1 from "./Section1";
import UniBuddy from "./Unibuddy";
import Blog from "./Blogs";
import Template from "./Template";
import Example from "../NewTable/Table";

const NewConnect = () => {
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
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <Section1 />/
        {/* <Example/> */}
      </motion.div>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <Template />
      </motion.div>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <UniBuddy />
      </motion.div>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <Blog />
      </motion.div>
    </>
  );
};

export default NewConnect;
