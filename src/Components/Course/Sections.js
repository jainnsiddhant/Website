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
      <section id="sections" className="-mt-10 justify-center align-middle items-center">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Top Courses
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          Explore elite courses tailored to elevate your expertise and pave your ideal career path   </p>
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
                          BSc/ MSc Finance
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Finance and Accounting
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">MSc Accounting</p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">MSc Auditing and Accounting</p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            MSc Accounting and Management
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
                          <p class="text-sm font-medium truncate">
                            Master’s in Business Administration (MBA)
                            </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          Master’s in Management (MIM)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          Master’s in Financial Analysis
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc/BSc Business Analytics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            MSc in Management and Finance
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
                      IT and Computer Science
                    </h5>
                  </a>
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc/BSc Computing Science
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc/BSc Artificial Intelligence
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc/BSc Data Science
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc/BSc Cyber Security
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc/BSc Machine Learning
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
                           BA (Hons) Economics and Management
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          BSc/MSc Economics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Economics and Finance
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            MPhil Finance and Economics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Data Analytics for Economics and Finance
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
                          <p class="text-sm font-medium truncate">MA English Literature</p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MA Linguistics
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MA Creative Writing
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MA Writing Studies
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MA Cultural Studies
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
                          MA International Relations (with a focus on Foreign Policy Analysis)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MA Diplomacy
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MA Law (specialization in International Law)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MA International Political Economy
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MA Security Studies
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
                          MSc Digital Marketing
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Brand Management
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Marketing Research
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Advertising
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Product Management
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
                          MSc Thermo Fluid Science and Engineering
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Mechatronics Engineering
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Materials Science and Engineering
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Integrated Product Design
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Aerospace Engineering
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
                          MSc Pharmaceutical Sciences (with a focus on Drug Discovery)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Pharmaceutical Engineering
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Regulatory Affairs for Pharmaceuticals
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Clinical Research
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Pharmaceutical Marketing
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
                          Clinical Psychology (Doctorate - DClinPsy)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Cognitive Psychology
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Developmental Psychology
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Social Psychology
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                          MSc Cognitive Neuroscience
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