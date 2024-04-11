import React from 'react'
import { motion } from 'framer-motion';
import { textAnimation } from "../Animation/Animation";
import gre from '../../images/gre.jpeg'
import ielts from '../../images/ielts.jpeg'
import toefl from '../../images/toefl.png'
import IeltsSection from './IeltsSection';
import GreSection from './GreSection';
import ToeflSection from './ToeflSection';

const GREs = () => {
    return (
        <>
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <section>
                <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0 mt-5 w-[80%] mx-auto">

                   <motion.div
                  whileHover={
                    {
                      scale: 1.15
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#ielts">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80" src={ielts} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#ielts">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Pack List doc file</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Prepare for your journey with comprehensive Packlist document, ensuring you have all you need for travels.</p>
                     </div>
                   </div>
                  </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.15
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#gre">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80" src={gre} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#gre">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Forex Cards</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Unlock seamless currency exchange and hassle-free transactions with our cutting-edge Forex Cards.</p>
                     </div>
                   </div>
                   </motion.div>

                   <motion.div
                  whileHover={
                    {
                      scale: 1.15
                    }
                  }>
                   <div className="max-w-xs bg-white">
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
                  </motion.div>

                </div>

            </section>
            </motion.div>

            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <IeltsSection />
            </motion.div>
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <GreSection />
            </motion.div>
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <ToeflSection />
            </motion.div>

        </>
    )
}

export default GREs

