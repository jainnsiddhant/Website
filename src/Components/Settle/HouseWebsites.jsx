import React from "react";
import { motion } from 'framer-motion';
import rightmove from '../../images/rightmove.png'
import spareroom from '../../images/sapreroom.jpg'
import zoopla from '../../images/zoopla.jpg'
import unihomes from '../../images/unihome.png'
import amber from '../../images/amber.jpg'

const HousingWebsites = () => {
    return(
        <section id="housingwebsites" className="mb-10">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Housing Websites
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    To find Property or Temporary accommodation.
                    </p>
                </div>

                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Right Move</h1>
                                 <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
                                 <button 
                                    type="button" 
                                    style={{ backgroundColor: '#34D399' }}
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.rightmove.co.uk/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={rightmove} alt="universityimage" className="h-12 w-12 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Spare Room</h1>
                                 <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
                                 <button 
                                    type="button" 
                                    style={{ backgroundColor: '#34D399' }}
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.spareroom.co.uk/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={spareroom} alt="universityimage" className="h-12 w-12 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Zoopla</h1>
                                 <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
                                 <button 
                                    type="button" 
                                    style={{ backgroundColor: '#34D399' }}
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.zoopla.co.uk/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={zoopla} alt="universityimage" className="h-12 w-12 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Unihomes</h1>
                                 <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
                                 <button 
                                    type="button" 
                                    style={{ backgroundColor: '#34D399' }}
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.unihomes.co.uk/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={unihomes} alt="universityimage" className="h-12 w-12 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
               
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Amber student</h1>
                                 <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
                                 <button 
                                    type="button" 
                                    style={{ backgroundColor: '#34D399' }}
                                    className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://amberstudent.com/', '_blank')}
                                    >
                                    View More
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={amber} alt="universityimage" className="h-12 w-12 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>


            </section>
    )
}

export default HousingWebsites