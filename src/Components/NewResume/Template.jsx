import React from "react";
import harvard from "../../images/harvard.jpg";
import GoldmanSachs from "../../images/GoldmanSachs.jpg";
import resume from "../../images/resume.jpg";
import { motion } from "framer-motion";
import DownloadPDF3 from "../Download/DownloadPDF3";
import DownloadPDF2 from "../Download/DownloadPDF2";

const Template = () => {
  return (
    <>
      <section id="template">
        <div className="container mx-auto px-4">
          <div className="flex flex-col mt-10 items-center">
            <div className="flex flex-col md:flex-row w-[80%] mt-2 mb-2">
              <div id="harvard" className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                <h1 className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900">
                Harvard CV & Cover Letter Document
                </h1>
                <p className="mb-3 text-lg font-normal text-gray-500">
                  Official Harvard instructions on creating a perfect CV & cover
                  letter.
                </p>
                <motion.div
                  whileHover={{
                    scale: 1.25,
                  }}
                >
                  {/* <button
                    type="button"
                    className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center"
                  >
                    Download
                  </button> */}
                  <DownloadPDF2 />
                </motion.div>
              </div>
              <div className="w-2/3 mx-auto md:w-1/2 flex justify-center mt-3 md:mt-0">
                <img
                  src={harvard}
                  alt="universityimage"
                  className="rounded-full"
                  style={{ height: 200, width: 200 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col mt-10 items-center">
            <div className="flex flex-col md:flex-row w-[80%] mt-2 mb-2">
              <div className="w-2/3 mx-auto md:w-1/2 flex justify-center mt-3 md:mt-0">
                <img
                  src={GoldmanSachs}
                  alt="universityimage"
                  className="rounded-full"
                  style={{ height: 200, width: 200 }}
                />
              </div>
              <div id="goldmansachs" className="justify-center items-center text-center w-full md:w-1/2 flex flex-col gap-x-3">
                <h1 className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900">
                  GoldmanSachs one page Template
                </h1>
                <p className="mb-3 text-lg font-normal text-gray-500">
                  Best one page CV Template.
                </p>
                {/* <a target="_blank" href="https://www.reed.co.uk/" className="text-sm mt-3">https://www.reed.co.uk/</a> */}
                <motion.div
                  whileHover={{
                    scale: 1.25,
                  }}
                >
                  {/* <button
                    type="button"
                    className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center"
                  >
                    Download
                  </button> */}
                  <DownloadPDF3 />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-[80%] mt-2 mb-2">
                             <div className="justify-center items-center text-center w-2/3 md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Enhance your Resume</h1>
                                <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                                IIT/IIM free certifications offered by there clubs.
                                </p>
                                 <a target="_blank" href="https://www.reed.co.uk/" className="text-sm mt-3">https://www.reed.co.uk/</a>
                                 <motion.div
                                   whileHover={
                                     {
                                       scale: 1.25
                                     }
                                   }>
                                 <button 
                                    type="button" 
                                    className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center" 
                                    onClick={() => window.open('https://www.myunidays.com/', '_blank')}
                                    >
                                    Download
                                </button>
                                </motion.div>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={resume} alt="universityimage" className="rounded-full" style={{height:200 , width:200}} />
                             </div>
                         </div>
                     </div>
               </div> */}
      </section>
    </>
  );
};

export default Template;
