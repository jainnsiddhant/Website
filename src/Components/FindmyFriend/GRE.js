import React from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../Animation/Animation";
import gre from "../../images/gre.jpeg";
import ielts from "../../images/ielts.jpeg";
import toefl from "../../images/toefl.png";

const GREs = () => {
  return (
    <>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <section className="items-center justify-center">
          <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2
              data-aos="fade-right"
              className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
            >
              Find my Friend
            </h2>
            <p className="mb-0 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
              Unlock Your Path: Essential Guidance for Navigating Life in the UK
            </p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0 mt-2 w-[80%] mx-auto">
            <motion.div
              whileHover={{
                scale: 1.15,
              }}
            >
              <div className="max-w-xs bg-white justify-center items-center mx-auto">
                <a href="#ielts">
                  <img
                    className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                    src={ielts}
                    alt=""
                  />
                </a>
                <div className="p-4">
                  <a href="#ielts">
                    <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                      Pack List doc file
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                    Prepare for your journey with comprehensive Packlist
                    document, ensuring you have all you need for travels.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.15,
              }}
            >
              <div className="max-w-xs bg-white justify-center items-center mx-auto">
                <a href="#gre">
                  <img
                    className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                    src={gre}
                    alt=""
                  />
                </a>
                <div className="p-4">
                  <a href="#gre">
                    <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                      Forex Cards
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                    Unlock seamless currency exchange and hassle-free
                    transactions with our cutting-edge Forex Cards.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.15 }}
              className="max-w-xs bg-white justify-center items-center mx-auto relative"
            >
              <a href="#toefl">
                <img
                  className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                  src={toefl}
                  alt=""
                />
              </a>
              <div className="p-4">
                <a href="#toefl">
                  <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                    Banks to Open
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                  Unlock your financial possibilities with our comprehensive
                  guide to opening banks.
                </p>
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75 rounded-xl opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-white font-bold text-lg">Coming Soon</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      <section className="text-center mb-28 mt-16">
        <h1 className="text-2xl justify-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h1>
      </section>

      <div>
        <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0 mt-2 w-[80%] mx-auto">
          <motion.div
            whileHover={{
              scale: 1.15,
            }}
          >
            <div className="max-w-xs bg-white justify-center items-center mx-auto">
              <a href="#ielts">
                <img
                  className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                  src={ielts}
                  alt=""
                />
              </a>
              <div className="p-4">
                <a href="#ielts">
                  <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                    Pack List doc file
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                  Prepare for your journey with comprehensive Packlist document,
                  ensuring you have all you need for travels.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.15,
            }}
          >
            <div className="max-w-xs bg-white justify-center items-center mx-auto">
              <a href="#gre">
                <img
                  className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                  src={gre}
                  alt=""
                />
              </a>
              <div className="p-4">
                <a href="#gre">
                  <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                    Forex Cards
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                  Unlock seamless currency exchange and hassle-free transactions
                  with our cutting-edge Forex Cards.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            className="max-w-xs bg-white justify-center items-center mx-auto relative"
          >
            <a href="#toefl">
              <img
                className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                src={toefl}
                alt=""
              />
            </a>
            <div className="p-4">
              <a href="#toefl">
                <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                  Banks to Open
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                Unlock your financial possibilities with our comprehensive guide
                to opening banks.
              </p>
            </div>
            <motion.div
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75 rounded-xl opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p className="text-white font-bold text-lg">Coming Soon</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section className="text-center mb-28 mt-16">
        <h2
          data-aos="fade-right"
          className="mb-3 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl"
        >
          Form
        </h2>

        <div className="text-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdnqiZnclqptWVQsNccOHOX0HmAemDsxMgXUxUsX8sSrEvtiA/viewform?embedded=true"
            
            height="1655"
            frameborder="0"
            marginheight="0"
            marginwidth="0" 
            className="flex md:w-3/5 w-100 mx-auto mt-7"
            title="Google Form Survey"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </>
  );
};

export default GREs;
