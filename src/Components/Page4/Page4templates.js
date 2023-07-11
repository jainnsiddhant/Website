import React from 'react'
import { motion } from 'framer-motion';
import { FaHome } from "react-icons/fa";
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { AiFillBank, AiOutlineFilePdf } from "react-icons/ai";

const Page4templates = () => {
  return (
    <>
      <div className='features mt-10 md:w-[90vw] mx-auto'>
        <section className="rounded-xl">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mb-8 lg:mb-16">
              <h1 className='text-7xl text-center specialfont'>Settle <em className='mytext'>in UK!</em><br /></h1>
              <p className="w-[85vw] text-center mt-5 mb-5 text-gray-500 text-xl">
                Welcome to our comprehensive guide on settling in the UK! Whether you're a student, a professional, or someone seeking a new life in the United Kingdom, we've got you covered.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
              <a href="#forexcards">
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <BsFillPersonVcardFill className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Forex cards</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
              </a>
              <a href="#packinglist">
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600 shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <AiOutlineFilePdf className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Packing List doc file
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
              </a>
              <a href="#bankstoopen">
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <AiFillBank className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Banks to Open</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  </p>
                </motion.div>
              </a>
              <a href="#housingwebsite">
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600  shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FaHome className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Housing Websites</h3>
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

export default Page4templates;