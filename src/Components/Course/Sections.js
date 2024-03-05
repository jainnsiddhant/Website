import React from "react";
import { motion } from "framer-motion";
import guide from "../../images/guide.jpg";

const Sections = () => {
  return (
    <>
      <section id="sections" className="mt-20">
        <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-5 w-[80%] mx-auto">
          <div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <img class="rounded-t-lg" src={guide} alt="" />
                </a>
                <div class="p-5 bg-slate-300">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Computer Science
                    </h5>
                  </a>
                  {/* <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                  <ul role="list" class="divide-y divide-gray-500">
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" /> */}
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Artificial Intelligence
                          </p>
                          <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p>
                        </div>
                        {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        1
                    </div> */}
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0">
                          {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Data Science
                          </p>
                          <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p>
                        </div>
                        {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        2
                    </div> */}
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" /> */}
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Cyber Security
                          </p>
                          <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p>
                        </div>
                        {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        3
                    </div> */}
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0">
                          {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" /> */}
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Data Structures
                          </p>
                          <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p>
                        </div>
                        {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        4
                    </div> */}
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0">
                          {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" /> */}
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">
                            Machine Learning
                          </p>
                          <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p>
                        </div>
                        {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        5
                    </div> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#table">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Check Ranking
                </button>
              </a>
            </div>
            {/* </div> */}

            <div>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${guide})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                  <div className="relative p-6 mt-10">
                    <div class="w-full max-w-md p-4 border border-gray-200 rounded-lg shadow sm:p-8">
                      <div class="items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-white text-center">
                          Computer Science
                        </h5>
                        {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline">
            View all
        </a> */}
                      </div>
                      <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200">
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Artificial Intelligence
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        1
                    </div> */}
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Data Science
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        2
                    </div> */}
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Cyber Security
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        3
                    </div> */}
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Data Structures
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        4
                    </div> */}
                            </div>
                          </li>
                          <li class="pt-3 pb-0 sm:pt-4">
                            <div class="flex items-center ">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Machine Learning
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        5
                    </div> */}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="flex mx-auto items-center justify-center mt-8">
                <a href="#table">
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
                  textShadow: "0px 0px 8px rgb(255,255,255",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
              >
                <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${guide})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
                  <div className="relative p-6 mt-10">
                    <div class="w-full max-w-md p-4 border border-gray-200 rounded-lg shadow sm:p-8">
                      <div class="items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-white text-center">
                          Computer Science
                        </h5>
                        {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline">
            View all
        </a> */}
                      </div>
                      <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200">
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Artificial Intelligence
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        1
                    </div> */}
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Data Science
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        2
                    </div> */}
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Cyber Security
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        3
                    </div> */}
                            </div>
                          </li>
                          <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Data Structures
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        4
                    </div> */}
                            </div>
                          </li>
                          <li class="pt-3 pb-0 sm:pt-4">
                            <div class="flex items-center ">
                              <div class="flex-shrink-0">
                                {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" /> */}
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-white truncate">
                                  Machine Learning
                                </p>
                                <p class="text-sm text-gray-300 truncate">
                                  email@windster.com
                                </p>
                              </div>
                              {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        5
                    </div> */}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="flex mx-auto items-center justify-center mt-8">
                <a href="#table">
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
        </div>
      </section>
    </>
  );
};

export default Sections;
