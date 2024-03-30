import accountsdata from "../University/Accounts_finnace";
import React from "react";
import { motion } from "framer-motion";
import account from "../../images/account.jpg";
import business from "../../images/business.jpeg.jpg";
import computer from "../../images/computer.jpg";
import economics from "../../images/economics.jpg";
import english from "../../images/english.jpg";
import international from "../../images/international.jpg";
import market from "../../images/market.jpg";
import mechanical from "../../images/mechnical.jpg";
import pharma from "../../images/pharma.jpg";
import psychology from "../../images/psychology.jpg";

const Sections = (props) => {
  return (
    <>
      <section id="sections" className="mt-20 justify-center align-middle items-center">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Top Course
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          Explore Our Top Courses for Your Next Educational Journey
          </p>
        </div>
        <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 md:space-y-0 mt-5 w-full mx-auto">
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={account}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Accounting and Finance
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Financial Accounting
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Managerial Accounting
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">Auditing</p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">Taxation</p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Corporate Finance
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button 
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={business}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Business and Management
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">Finance</p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">Marketing</p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Human Resource Management (HRM)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Operations Management
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Strategic Management
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={computer}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Computer Science Information
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Artificial Intelligence
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Data Science
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Cyber Security
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Data Structures
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Machine Learning
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={economics}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Economics
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Microeconomics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Macroeconomics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            International Economics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Development Economics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Labor Economics
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={english}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      English
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">Literature</p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Linguistics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Creative Writing
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Composition and Rhetoric
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Cultural Studies
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={international}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      International Relations
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Security Studies
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            International Political Economy (IPE)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            International Law and Organizations
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Diplomacy and Negotiation
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Foreign Policy Analysis
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={market}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Marketing
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Digital Marketing
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Brand Management
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Market Research and Analytics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Advertising and Promotion
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Product Management
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={mechanical}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Mechanical
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Thermodynamics and Energy Systems
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Mechatronics and Robotics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Materials Science and Engineering
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Design and Manufacturing
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Fluid Mechanics and Aerodynamics
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={pharma}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Pharmaceutical
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Drug Discovery and Development
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Pharmaceutical Manufacturing
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Regulatory Affairs
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Clinical Research and Trials
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Pharmaceutical Marketing and Sales
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  w-[90%] justify-center items-center mx-auto">
                <a href="#">
                  <img
                    class="rounded-t-lg h-60 w-60 mx-auto"
                    src={psychology}
                    alt=""
                  />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Psychology
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Clinical Psychology
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Cognitive Psychology
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Developmental Psychology
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Social Psychology
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Biopsychology (Neuropsychology)
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#univtable">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
