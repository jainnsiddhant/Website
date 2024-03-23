import React from "react";
import { motion } from 'framer-motion';
import bt from "../../images/bt.png"
import ee from "../../images/ee.png"
import now from "../../images/now.png"
import sky from "../../images/sky.png"
import virginmedia from "../../images/virginmedia.jpg"
import vodafone from "../../images/vodafone.png"

const Wifi = () => {
    return(
        <section id="wifiproviders">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        WIFI Providers
                    </h2>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    Explore the Best WiFi Providers for Seamless Connectivity.
                    </p>
                </div>

                <div className="md:w-[80vw] mx-auto">
                
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">BT Broadband</h1>
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
                                    onClick={() => window.open('https://www.bt.com/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={bt} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>

                     <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Virgin Media</h1>
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
                                    onClick={() => window.open('https://www.virginmedia.com/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={virginmedia} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                     <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">EE Unlimited</h1>
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
                                    onClick={() => window.open('https://ee.co.uk', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={ee} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                     <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Sky Broadband</h1>
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
                                    onClick={() => window.open('https://sky.broadband-finder.co.uk', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={sky} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                     <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Vodafone</h1>
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
                                    onClick={() => window.open('https://www.vodafone.co.uk/broadband', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={vodafone} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                     <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">NOW Broadband</h1>
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
                                    onClick={() => window.open('https://www.nowtv.com/broadband', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={now} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>


               </div>
          <div className="w-[80%] mx-auto mt-10">
                    <motion.div
                      whileHover={
                      {
                       scale: 1.25
                      }
                       }>
                    <button 
                        type="button" 
                        style={{ backgroundColor: '#FFA500' }}
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 md:w-1/4 mx-auto flex justify-center -mt-10" 
                        onClick={() => window.open('https://www.telegraph.co.uk/recommended/tech/best-broadband/', '_blank')}
                        >
                        Click for more Information
                    </button>
                    </motion.div>
                </div>
        </div>
   
            </section>
    )
}

export default Wifi