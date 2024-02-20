import React from "react";
import { motion } from 'framer-motion';
import UnibuddyLogo from "../../images/UnibuddyLogo.png"
import { AiOutlineAppstore } from "react-icons/ai";
import { RiGooglePlayLine } from "react-icons/ri";


const UniBuddy = () => {
    return(
        <section id="UniBuddy" className="mt-10">
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                     <h1 className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl mt-10">UniBuddy</h1>
                         <div className="flex w-[80%] mt-2 mb-2">
                         <div className="w-full flex flex-col justify-center mt-3 md:mt-0">
                                 <img src={UnibuddyLogo} alt="universityimage" style={{height: '50%', width: '66.67%'}} className="mx-auto mb-2" />
                                 <p className="mt-2 mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                                Unibuddy is a platform that connects prospective students with current university students, allowing them to gain insights and advice about university life, courses, and campuses. Through peer-to-peer interactions, Unibuddy enables prospective students to make informed decisions about their higher education journey, fostering a sense of community and support throughout the application process. The platform facilitates meaningful connections and empowers students to explore their educational options with confidence.
                                </p>
                                <div className="flex space-x-2 mx-auto">
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button" 
                                    style={{ backgroundColor: '#0077B5' }}
                                    className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-20 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://unibuddy.com/', '_blank')}
                                    >
                                    Website
                                </button>
                                </motion.div>
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button" 
                                    style={{ backgroundColor: '#0077B5' }}
                                    className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-20 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.unibuddy&hl=en&gl=US', '_blank')}
                                    >
                                    <RiGooglePlayLine className="text-xl"/>
                                </button>
                                </motion.div>
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button" 
                                    style={{ backgroundColor: '#0077B5' }}
                                    className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-20 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://apps.apple.com/us/app/unibuddy/id1238171778', '_blank')}
                                    >
                                    <AiOutlineAppstore className="text-xl" />
                                </button>
                                </motion.div>
                                 </div>
                             </div>
                         </div>
                     </div>
               </div>
                
            </section>
    )
}

export default UniBuddy



