import React from "react";
import { motion } from 'framer-motion';
import { textAnimation } from "../Animation/Animation";
import Cards from "./Cards";
import Sections from "./Sections";
import harvard from "../../images/harvard.jpg"
import GoldmanSachs from "../../images/GoldmanSachs.jpg"
import oxford from "../../images/oxford.jpg"

const NewHome = () => {
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
          <div className="relative pt-36 ml-auto">
          <motion.div
                  variants={textAnimation}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ staggerChildren: 0.5 }}
          >
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900  font-bold text-4xl md:text-6xl xl:text-6xl">
                Ready to take Admission in{" "}
                <span className="text-black  bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  UK
                </span>
              </h1>
              <p className="mt-8 text-gray-700 ">
                Best Place for finding the stuff for you
              </p>
            </div>
            </motion.div>
            <div className="">
            <motion.div
                  variants={textAnimation}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ staggerChildren: 0.5 }}
          >
            <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-10">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Top Universitites
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        Best universities to pursue education abroad.
                    </p>
                </div>

              <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-5 w-[80%] mx-auto">
                <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="w-[80%] bg-white">
                     <a href="#forexcards">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={oxford} alt="image university" style={{height:200 , width:350}} />
                     </a>
                     <div className="p-4">
                       <a href="#forexcards">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900 text-center">Oxford</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base text-center">The best University to study abroad.</p>
                     </div>
                   </div>
                   </motion.div>

                   <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="w-[80%] bg-white">
                     <a href="#packlists">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={GoldmanSachs} alt="image university" style={{height:200 , width:350}} />
                     </a>
                     <div className="p-4">
                       <a href="#packlists">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900 text-center">GoldmanSachs</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base text-center">The best University to study abroad.</p>
                     </div>
                   </div>
                  </motion.div>

                   <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="w-[80%] bg-white">
                     <a href="#bankstoopen">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={harvard} alt="image university" style={{height:200 , width:350}} />
                     </a>
                     <div className="p-4">
                       <a href="#bankstoopen">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900 text-center">Harvard</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base text-center">The best University to study abroad.</p>
                     </div>
                   </div>
                  </motion.div>

                </div>
</motion.div>

              <div className="md:flex p-6 md:flex-row space-y-7 md:space-y-0 justify-between mt-10">
                <Cards />
              </div>


            </div>
            {/* <Sections /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHome;