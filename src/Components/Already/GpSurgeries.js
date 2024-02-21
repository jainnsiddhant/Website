import React from "react";
import { motion } from 'framer-motion';
import gp from "../../images/gp.jpg"

const GpSurgeries = () => {
    return(
            <section id="gpsurgeries">
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-2/3 md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Healthcare and Nearby GPs</h1>
                                <p className="mb-3 text-lg font-normal text-gray-500 text-justify">
                                GP surgeries are usually the first contact if you have a health problem. They can treat many
conditions and give health advice. They can also refer you to other NHS services.
                                </p>
                                 {/* <a target="_blank" href="https://www.reed.co.uk/" className="text-sm mt-3">https://www.reed.co.uk/</a> */}
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button" 
                                    style={{ backgroundColor: '#34D399' }}
                                    className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.nhs.uk/nhs-services/gps/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={gp} alt="universityimage" className="rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                
            </section>
    )
}

export default GpSurgeries