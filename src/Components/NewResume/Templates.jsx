import React from "react";
import harvard from "../../images/harvard.jpg"
import goldmansachs from "../../images/GoldmanSachs.jpg"
import resume from "../../images/resume.jpg"
import { motion } from 'framer-motion';

const Templates = () => {
    return (
        <>
            <section id="resumebuild">
                <div className="mt-10 py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Resume Builder
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    Unlock your career potential with our Resume Builder – craft professional resumes effortlessly.
                    </p>
                </div>

                {/* <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none mt-4">View all Universities</button> */}

                <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-5 w-[80%] mx-auto">
                <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white mx-auto justify-center items-center text-center">
                     <a href="#harvard">
                       <img style={{height:200, width:200}} className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 mx-auto" src={harvard} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#harvard">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Harvard CV & Cover Letter Document</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Official Harvard instructions on creating a perfect CV & cover letter.</p>
                     </div>
                   </div>
                   </motion.div>


                <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white mx-auto justify-center items-center text-center">
                     <a href="#goldmansachs">
                       <img style={{height:200, width:200}} className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 mx-auto" src={goldmansachs} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#goldmansachs">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">GoldmanSachs one page Template</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Best one page CV Template.</p>
                     </div>
                   </div>
                   </motion.div>


                <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white mx-auto justify-center items-center text-center">
                     <a href="#table">
                       <img style={{height:200, width:200}} className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 mx-auto" src={resume} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#table">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Enhance your Resume</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">IIT/IIM free certifications offered by there clubs.</p>
                     </div>
                   </div>
                   </motion.div>


                   
                </div>


            </section>
        </>
    )
}

export default Templates