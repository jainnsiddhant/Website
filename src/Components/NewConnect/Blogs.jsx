import React from "react";
import { motion } from 'framer-motion';
import harvard from "../../images/harvard.jpg"
import GoldmanSachs from "../../images/GoldmanSachs.jpg"

const Blog = () => {
    return(
        <>
            <section id="featuredblogs" className="mt-10">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Features Blogs
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500">
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
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={harvard} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#instructions">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Harvard</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">To know more read the blog. Get detailed info about these univertities.</p>
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
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={GoldmanSachs} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#savemoney">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">GoldmanSachs</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">To know more the read the blog.Get detailed info about these univertities.</p>
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
                     <a href="#instructions">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={harvard} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#instructions">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Harvard</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">To know more read the blog. Get detailed info about these univertities.</p>
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
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={GoldmanSachs} alt="" />
                     </a>
                     <div className="p-4">
                       <a href="#savemoney">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">GoldmanSachs</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">To know more the read the blog. Get detailed info about these univertities.</p>
                     </div>
                   </div>
                   </motion.div>

                </div>
            </section>
        </>
    )
}

export default Blog;
