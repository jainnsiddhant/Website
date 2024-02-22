import React from "react";
import { motion } from 'framer-motion';
import resume from "../../images/resume.jpg";
import instructionlist from "../../images/instructionlist.jpg"

const Cards = () => {
    return (
        <>
            <section id="cards">
                
            <div className="flex space-x-4 mt-5 w-[80%] mx-auto">
            <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={resume} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Subject Wise Ranking</h5>
        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
            </motion.div>
            <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={instructionlist} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Course Wise Ranking</h5>
        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
            </motion.div>
            </div>

            </section>
        </>
    )
}

export default Cards