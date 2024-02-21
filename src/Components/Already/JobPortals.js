import React from "react";
import { motion } from 'framer-motion';
import reed from "../../images/reed.png"
import monster from "../../images/monster.jpg"
import govt from "../../images/govt.jpg"
import indeed from "../../images/indeed.png"
import bright from "../../images/bright.png"
import grad from "../../images/grad.png"
import linkedin from "../../images/linkedin.jpg"

const JobPortals = () => {
    return(
        <section id="jobportal">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-10">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Job Portals
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    Always check your university job portal for part-time or full time jobs apart from ones
mentioned below
                    </p>
                </div>

                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Reed</h1>
                                 {/* <a target="_blank" href="https://www.reed.co.uk/" className="text-sm mt-3">https://www.reed.co.uk/</a> */}
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button"
                                    style={{ backgroundColor: '#8A2BE2' }} 
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.reed.co.uk/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={reed} alt="universityimage" className="h-20 w-20 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Monster</h1>
                                 {/* <a target="_blank" href="https://www.monster.co.uk/" className="text-sm mt-3">https://www.monster.co.uk/</a> */}
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button"
                                    style={{ backgroundColor: '#8A2BE2' }} 
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.monster.co.uk/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={monster} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Government Portal</h1>
                                 {/* <a target="_blank" href="https://www.gov.uk/find-a-job" className="text-sm mt-3">https://www.gov.uk/find-a-job</a> */}
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button"
                                    style={{ backgroundColor: '#8A2BE2' }} 
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.gov.uk/find-a-job', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={govt} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Indeed</h1>
                                 {/* <a target="_blank" href="https://uk.indeed.com/" className="text-sm mt-3">https://uk.indeed.com/</a> */}
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button"
                                    style={{ backgroundColor: '#8A2BE2' }} 
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://uk.indeed.com/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={indeed} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
               
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Bright Network</h1>
                                 {/* <a target="_blank" href="https://www.brightnetwork.co.uk/" className="text-sm mt-3">https://www.brightnetwork.co.uk/</a> */}
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button"
                                    style={{ backgroundColor: '#8A2BE2' }} 
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.brightnetwork.co.uk/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={bright} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">LinkedIn</h1>
                                 {/* <a target="_blank" href="https://uk.linkedin.com/jobs" className="text-sm mt-3">https://uk.linkedin.com/jobs</a> */}
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button"
                                    style={{ backgroundColor: '#8A2BE2' }} 
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://uk.linkedin.com/jobs', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={linkedin} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                <div className="container mx-auto px-4 mb-10">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">GradCracker</h1>
                                 {/* <a target="_blank" href="https://www.gradcracker.com/" className="text-sm mt-3">https://www.gradcracker.com/</a> */}
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button"
                                    style={{ backgroundColor: '#8A2BE2' }} 
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.gradcracker.com/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={grad} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>


            </section>
    )
}

export default JobPortals