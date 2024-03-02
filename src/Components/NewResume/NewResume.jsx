import React from "react";
import { motion } from 'framer-motion';
import { textAnimation } from "../Animation/Animation";
import Banner from "./Banner";
import Templates from "./Templates";
import Template from "./Template";
import Table from "./Table"

const NewResume = () => {
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
            <Templates />
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
            <Table />
</motion.div>
        </>
    )
}

export default NewResume