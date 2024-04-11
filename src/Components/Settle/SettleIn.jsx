import React from "react";
import { motion } from 'framer-motion';
import { textAnimation } from "../Animation/Animation";
import Bank from '../../images/Bank.jpg'
import forex from '../../images/forex.jpg'
import packlist from '../../images/packlist.jpg'
import house from '../../images/house.jpg'
import ForexCard from "./ForexCards";
import PackList from "./Packlist";
import HousingWebsites from "./HouseWebsites";
import BanksToOpen from "./BankstoOpen";

const SettleIn = () => {
    return(
        <>
            {/* <div className="relative w-[80%] mx-auto top-0 inset-0 flex flex-col justify-center items-center z-10">
               <h1 className="text-5xl mb-4">Settle In UK</h1>
               <p className="text-lg mb-8">Welcome to our comprehensive guide on settling in the UK! Whether you're a student, a professional, or someone seeking a new life in the United Kingdom, we've got you covered.</p>
            </div> */}

            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <section>
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Settling Down Guidelines
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    The Ultimate UK Settling-In Guide: Everything You Need to Know
                    </p>
                </div>

                {/* <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none mt-4">View all Universities</button> */}

                <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 mt-5 w-[80%] mx-auto">
                <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#forexcards">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={forex} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#forexcards">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Forex Cards</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Unlock seamless currency exchange and hassle-free transactions with our cutting-edge Forex Cards.</p>
                     </div>
                   </div>
                   </motion.div>

                   <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#packlists">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={packlist} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#packlists">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Pack List doc file</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Prepare for your journey with comprehensive Packlist document, ensuring you have all you need for travels.</p>
                     </div>
                   </div>
                  </motion.div>

                   <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#bankstoopen">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={Bank} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#bankstoopen">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Banks to Open</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Unlock your financial possibilities with our comprehensive guide to opening banks.</p>
                     </div>
                   </div>
                  </motion.div>

                   <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#housingwebsites">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={house} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#housingwebsites">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Housing Websites</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Explore our curated collection of top housing websites for all your property needs.</p>
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
            <ForexCard />
            </motion.div>
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <PackList />
            </motion.div>
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <BanksToOpen />
            </motion.div>
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <HousingWebsites />
            </motion.div>

        </>
    )
}

export default SettleIn