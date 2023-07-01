import React from 'react'
import { motion } from 'framer-motion';
import { FaWifi , FaMoneyBillAlt , FaCalculator , FaClipboardList } from "react-icons/fa";

const Page5templates = () => {
  return (
    <>
    <div className='features mt-10 md:w-[90vw] mx-auto'>
          <section className="rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mb-8 lg:mb-16">
            <h1 className='text-7xl text-center specialfont'>After Coming <em className='mytext'>in UK!</em><br /></h1>
            <p className="w-[85vw] text-center text-gray-500 text-xl">
            We will help you settle down .
            </p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
              <a href="#wifi">
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600  shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FaWifi className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">WIFI</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                </a>
                <a href="#savemoney">
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FaMoneyBillAlt className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Save Money</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                </a>
                <a href='#taxcalculate'>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600 shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FaCalculator className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                  Tax Calculator
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                </a>
                <a href='#jobagencies'>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FaClipboardList className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Job Agencies</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                </a>
              </div>
            </div>
          </section>
        </div>
    </>
  )
}

export default Page5templates