import React from 'react'
import img1 from "../../images/andrea-de-santis-_kAOOTC4MQA-unsplash.jpg"
import img2 from "../../images/sabrina-mazzeo-g-krQzQo9mI-unsplash.jpg"
import img3 from "../../images/tetiana-shyshkina-doz4m12DDig-unsplash.jpg"
import { motion } from 'framer-motion';
import { FaUnlockAlt, FaHandHoldingUsd } from "react-icons/fa";
import { RiNodeTree } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { SiHiveBlockchain } from "react-icons/si";
import { HiClipboardDocumentCheck } from "react-icons/hi2"
const Intro = () => { 


  
  return (
    <>
      <div className="">
        <div className="max-w-[100vw] md:p-8 flex justify-between">
          <div className="md:w-[100vw] content">
            <h1 className='md:text-7xl md:pl-5 md:pr-5 hidden md:block specialfont'>Discover <br /> Colleges, Courses <br /> <em className='mytext'>& Scholarships</em><br /></h1>
            <h1 className="text-4xl md:hidden md:w-[100vw] h-[30vh]  items-center text-center flex blinkingcursor mytext specialfont">Discover Colleges, Courses & Scholarships </h1>
            <p className="md:w-[30vw] w-[100vw]  md:pt-[5vh] text-center md:text-left md:pl-5">
              The Next Generation Way to find The Best College and Course at one place.
            </p>
            <div className="flex space-x-5 md:justify-start justify-center pt-[5vh] md:pl-5">
              <button className='bg-black hover:text-black hover:bg-white text-white text-2xl rounded-full pl-3 pr-3 border-2 transition duration-300 border-black'>Explore</button>
              <button className='border-[1px] border-white rounded-full text-xl pl-3 pr-3'>Colleges</button>
            </div>
          </div>
          <div className="max-w-[50vw] justify-end hidden h-auto md:flex">
            <div className="w-[18vw]">
              <div className="h-[70%] rounded-2xl">
                <img src={img1} alt="" className="h-[100%] z-50 transform-img" />
              </div>
              <div className="h-[30%] w-[20vw] mt-[-3rem] rounded-2xl glasseffect">
              </div>
            </div>
            <div className="w-[14vw]">
              <div className="h-[50%] w-[20vw] rounded-2xl glasseffect">
              </div>
              <div className="h-[60%] rounded-2xl">
                <img src={img2} alt="" className="h-[100%] transform-img z-[50] mt-[-5rem]" />
              </div>
            </div>
            <div className="w-[18vw]">
              <div className="h-[60%] rounded-2xl ">
                <img src={img3} alt="" className="h-[100%] transform-img z-[100]" />
              </div>
              <div className="h-[40%] rounded-2xl glasseffect mt-[-5rem]">
              </div>
            </div>
          </div>
        </div>



        <div className="UniversityRankings  md:w-[80vw] mx-auto">

          <section className="rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-4 text-center text-3xl tracking-tight font-bold text-gray-900">
                  University Rankings
                </h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                  <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
                    <input id="Toggle3" type="checkbox" className="hidden peer" />
                    <span className="px-4 py-2 rounded-l-md dark:bg-violet-400 peer-checked:dark:bg-gray-300">Management</span>
                    <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-violet-400">Science</span>
                  </label>
                </p>
              </div>
              <div className="container p-4 sm:p-4 border rounded-xl">
                <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2>
                <div className="overflow-x-auto mx-auto">
                  <table className="min-w-full text-sm mx-auto text-right">
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="">
                      <tr className="">
                        <th className="p-3">Ranking</th>
                        <th className="p-3">University</th>
                        <th className="p-3">Rating *</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-opacity-20">
                        <td className="p-3">
                          <p>1</p>
                        </td>
                        <td className="p-3">
                          <p>Microsoft Corporation</p>
                        </td>
                        <td className="p-3">
                          <p>2*</p>
                        </td>
                        <td className="p-3">
                          <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400">
                            <span>View</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-opacity-20">
                        <td className="p-3">
                          <p>3</p>
                        </td>
                        <td className="p-3">
                          <p>Microsoft Corporation</p>
                        </td>
                        <td className="p-3">
                          <p>3*</p>
                        </td>
                        <td className="p-3">
                          <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400">
                            <span>View</span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table> 
                  <small className='text-[0.7rem]'>* All ratings are Out of 10</small>
                </div>
              </div>
            </div>
          </section>

        </div>

        <div className='features mt-10 md:w-[80vw] mx-auto'>
          <section className="rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-4 text-center text-2xl tracking-tight font-bold text-gray-900">
                  Why Choose Us?
                </h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                  A New way to find best college for you
                </p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600  shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FaUnlockAlt className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Explore Collges</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <RiNodeTree className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Explore Scholarships</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600 shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <SiHiveBlockchain className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Decentralized
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <AiOutlineSafetyCertificate className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Resume Building</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600 shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FaHandHoldingUsd className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Easy to Use
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <HiClipboardDocumentCheck className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Best Courses</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>



      </div>
    </>
  )
}

export default Intro