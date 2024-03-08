// import React from "react";
// import { motion } from "framer-motion";
// import guide from "../../images/guide.jpg";
import accountsdata from "../University/Accounts_finnace";
// const Sections = () => {
//   return (
//     <>
//       <section id="sections" className="mt-20">
//         <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-5 w-[80%] mx-auto">
//           <div>
//             <motion.div
//               whileHover={{
//                 scale: 1.1,
//                 textShadow: "0px 0px 8px rgb(255,255,255)",
//                 boxShadow: "0px 0px 8px rgb(255,255,255)",
//               }}
//             >
//               <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
//                 <a href="#">
//                   <img class="rounded-t-lg" src={guide} alt="" />
//                 </a>
//                 <div class="p-5 bg-slate-300">
//                   <a href="#">
//                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
//                       Computer Science
//                     </h5>
//                   </a>
//                   {/* <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
//                   <ul role="list" class="divide-y divide-gray-500">
//                     <li class="py-3 sm:py-4">
//                       <div class="flex items-center">
//                         <div class="flex-shrink-0">
//                           {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" /> */}
//                         </div>
//                         <div class="flex-1 min-w-0 ms-4">
//                           <p class="text-sm font-medium truncate">
//                             Artificial Intelligence
//                           </p>
//                           <p class="text-sm text-gray-500 truncate">
//                             email@windster.com
//                           </p>
//                         </div>
//                         {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
//                         1
//                     </div> */}
//                       </div>
//                     </li>
//                     <li class="py-3 sm:py-4">
//                       <div class="flex items-center ">
//                         <div class="flex-shrink-0">
//                           {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
//                         </div>
//                         <div class="flex-1 min-w-0 ms-4">
//                           <p class="text-sm font-medium truncate">
//                             Data Science
//                           </p>
//                           <p class="text-sm text-gray-500 truncate">
//                             email@windster.com
//                           </p>
//                         </div>
//                         {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
//                         2
//                     </div> */}
//                       </div>
//                     </li>
//                     <li class="py-3 sm:py-4">
//                       <div class="flex items-center">
//                         <div class="flex-shrink-0">
//                           {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" /> */}
//                         </div>
//                         <div class="flex-1 min-w-0 ms-4">
//                           <p class="text-sm font-medium truncate">
//                             Cyber Security
//                           </p>
//                           <p class="text-sm text-gray-500 truncate">
//                             email@windster.com
//                           </p>
//                         </div>
//                         {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
//                         3
//                     </div> */}
//                       </div>
//                     </li>
//                     <li class="py-3 sm:py-4">
//                       <div class="flex items-center ">
//                         <div class="flex-shrink-0">
//                           {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" /> */}
//                         </div>
//                         <div class="flex-1 min-w-0 ms-4">
//                           <p class="text-sm font-medium truncate">
//                             Data Structures
//                           </p>
//                           <p class="text-sm text-gray-500 truncate">
//                             email@windster.com
//                           </p>
//                         </div>
//                         {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
//                         4
//                     </div> */}
//                       </div>
//                     </li>
//                     <li class="pt-3 pb-0 sm:pt-4">
//                       <div class="flex items-center ">
//                         <div class="flex-shrink-0">
//                           {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" /> */}
//                         </div>
//                         <div class="flex-1 min-w-0 ms-4">
//                           <p class="text-sm font-medium truncate">
//                             Machine Learning
//                           </p>
//                           <p class="text-sm text-gray-500 truncate">
//                             email@windster.com
//                           </p>
//                         </div>
//                         {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
//                         5
//                     </div> */}
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//             <div className="flex mx-auto items-center justify-center mt-8">
//               <a href="#table">
//                 <button
//                   type="button"
//                   class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
//                 >
//                   Check Ranking
//                 </button>
//               </a>
//             </div>
//           </div>

//           <div>
//             <motion.div
//               whileHover={{
//                 scale: 1.1,
//                 textShadow: "0px 0px 8px rgb(255,255,255",
//                 boxShadow: "0px 0px 8px rgb(255,255,255)",
//               }}
//             >
//               <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${guide})`,
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                   }}
//                 ></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
//                 <div className="relative p-6 mt-10">
//                   <div class="w-full max-w-md p-4 border border-gray-200 rounded-lg shadow sm:p-8">
//                     <div class="items-center justify-between mb-4">
//                       <h5 class="text-xl font-bold leading-none text-white text-center">
//                         Computer Science
//                       </h5>
//                     </div>
//                     <div class="flow-root">
//                       <ul role="list" class="divide-y divide-gray-200">
//                         <li class="py-3 sm:py-4">
//                           <div class="flex items-center">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Artificial Intelligence
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                           </div>
//                         </li>
//                         <li class="py-3 sm:py-4">
//                           <div class="flex items-center ">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Data Science
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                             {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
//                         2
//                     </div> */}
//                           </div>
//                         </li>
//                         <li class="py-3 sm:py-4">
//                           <div class="flex items-center">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Cyber Security
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                             {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
//                         3
//                     </div> */}
//                           </div>
//                         </li>
//                         <li class="py-3 sm:py-4">
//                           <div class="flex items-center ">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Data Structures
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                             {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
//                         4
//                     </div> */}
//                           </div>
//                         </li>
//                         <li class="pt-3 pb-0 sm:pt-4">
//                           <div class="flex items-center ">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Machine Learning
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                             {/* <div class="inline-flex items-center text-base font-semibold text-gray-900">
//                         5
//                     </div> */}
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//             <div className="flex mx-auto items-center justify-center mt-8">
//               <a href="#table">
//                 <button
//                   type="button"
//                   class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
//                 >
//                   Check Ranking
//                 </button>
//               </a>
//             </div>
//           </div>

//           <div>
//             <motion.div
//               whileHover={{
//                 scale: 1.1,
//                 textShadow: "0px 0px 8px rgb(255,255,255",
//                 boxShadow: "0px 0px 8px rgb(255,255,255)",
//               }}
//             >
//               <div className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center">
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${guide})`,
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                   }}
//                 ></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
//                 <div className="relative p-6 mt-10">
//                   <div class="w-full max-w-md p-4 border border-gray-200 rounded-lg shadow sm:p-8">
//                     <div class="items-center justify-between mb-4">
//                       <h5 class="text-xl font-bold leading-none text-white text-center">
//                         Computer Science
//                       </h5>
//                     </div>
//                     <div class="flow-root">
//                       <ul role="list" class="divide-y divide-gray-200">
//                         <li class="py-3 sm:py-4">
//                           <div class="flex items-center">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Artificial Intelligence
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                           </div>
//                         </li>
//                         <li class="py-3 sm:py-4">
//                           <div class="flex items-center ">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Data Science
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                           </div>
//                         </li>
//                         <li class="py-3 sm:py-4">
//                           <div class="flex items-center">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Cyber Security
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                           </div>
//                         </li>
//                         <li class="py-3 sm:py-4">
//                           <div class="flex items-center ">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Data Structures
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                           </div>
//                         </li>
//                         <li class="pt-3 pb-0 sm:pt-4">
//                           <div class="flex items-center ">
//                             <div class="flex-shrink-0">
//                               {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" /> */}
//                             </div>
//                             <div class="flex-1 min-w-0 ms-4">
//                               <p class="text-sm font-medium text-white truncate">
//                                 Machine Learning
//                               </p>
//                               <p class="text-sm text-gray-300 truncate">
//                                 email@windster.com
//                               </p>
//                             </div>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//             <div className="flex mx-auto items-center justify-center mt-8">
//               <a href="#table">
//                 <button
//                   type="button"
//                   class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
//                 >
//                   Check Ranking
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Sections;

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
      <section id="sections" className="mt-20">
        <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0 mt-5 w-[95%] mx-auto">
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">Auditing</p>
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">Taxation</p>
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="flex mx-auto items-center justify-center mt-8">
              <a href="#table">
                <button 
                  onClick={(e)=>{
                    props.setchnageUniv(accountsdata)
                  }}
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
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center ">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium truncate">Marketing</p>
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
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
          </div>
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
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
          </div>
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
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
          </div>
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
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
          </div>
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
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
          </div>
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
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
          </div>
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
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
          </div>
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
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
          </div>
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
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
                          {/* <p class="text-sm text-gray-500 truncate">
                            email@windster.com
                          </p> */}
                        </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
