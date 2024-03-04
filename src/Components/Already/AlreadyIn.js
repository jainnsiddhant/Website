import React from "react";
import { motion } from 'framer-motion';
import { textAnimation } from "../Animation/Animation";
import ninum from "../../images/ninum.jpg"
import gp from "../../images/gp.jpg"
import job from "../../images/job.jpg"
import tax from "../../images/tax.jpg"
import instruction from "../../images/instruction.jpg"
import wifi from "../../images/wifi.jpg"
import save from "../../images/save.jpg"
import Tax from "./Tax";
import Instruction from "./Instruction";
import SaveMoney from "./SaveMoney";
import JobPortals from "./JobPortals";
import GpSurgeries from "./GpSurgeries";
import NINumber from "./NINumber";
import Wifi from "./Wifi";
import reload from "../../images/reload.jpg"

const AlreadyIn = () => {
    return(
        <>
           <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <section>
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Already In UK
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    Unlock Your Path: Essential Guidance for Navigating Life in the UK.
                    </p>
                </div>

                <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 mt-5 w-[80%] mx-auto">

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#instructions">
                       <img className="px-5 py-6 rounded-xl mx-auto bg-white shadow-gray-800 border-2 object-cover" src={instruction} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#instructions">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Instructions</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Important instructions for international students</p>
                     </div>
                   </div>
                   </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#savemoney">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={save} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#savemoney">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Save Money</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">How to save money as a student.</p>
                     </div>
                   </div>
                   </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#jobportal">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={job} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#jobportal">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Job Portals</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Check following job portals for part-time or full time jobs.</p>
                     </div>
                   </div>
                   </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#gpsurgeries">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={gp} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#gpsurgeries">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">GP Surgeries</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">GP surgeries are usually the first contact if you have a health problem.</p>
                     </div>
                   </div>
                   </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#ninumber">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={ninum} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#ninumber">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">NI Number</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">A National Insurance number (NINO) is used to uniquely identify you in the UK system.</p>
                     </div>
                   </div>
                   </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#wifiproviders">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={wifi} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#wifiproviders">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">WIFI Providers</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Use student discounts.</p>
                     </div>
                   </div>
                   </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#taxcalc">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={tax} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#taxcalc">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Tax Calculator</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Calculate the tax to be paid.</p>
                     </div>
                   </div>
                   </motion.div>

                  {/* <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }> */}
                   <div className="my-auto">
                     <a href="#">
                       <img className="px-5 py-6 rounded-xl object-cover" src={reload} alt="" />
                     </a>
                     {/* <div className="p-4">
                       <a href="#">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900"></h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base"></p>
                     </div> */}
                   </div>
                   {/* </motion.div> */}
                </div>
            </section>
            </motion.div>
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <Instruction />
        </motion.div>
            
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <SaveMoney />
        </motion.div>
            
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <JobPortals />
        </motion.div>
            
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <GpSurgeries />
        </motion.div>
            
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <NINumber />
        </motion.div>
            
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <Wifi />
        </motion.div>
            
            <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
            <Tax />
        </motion.div>
            
        </>
    )
}

export default AlreadyIn;
