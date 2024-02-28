import React from "react";
import { motion } from "framer-motion";
import UnibuddyLogo from "../../images/UnibuddyLogo.png";
import website from "../../images/website.jpg"
import gplay from "../../images/gplay.png"
import apple from "../../images/apple.jpg"

const UniBuddy = () => {
  return (
    <section id="UniBuddy" className="mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col mt-4 items-center">
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl mt-10">
            UniBuddy
          </h1>
          <div className="flex w-[80%] mt-2 mb-2">
            <div className="w-full flex flex-col justify-center mt-3 md:mt-0">
              <img
                src={UnibuddyLogo}
                alt="universityimage"
                style={{ height: "50%", width: "66.67%" }}
                className="mx-auto mb-2"
              />
              <p className="mt-2 mb-3 text-lg font-normal text-gray-500 text-justify">
                Unibuddy is a platform that connects prospective students with
                current university students, allowing them to gain insights and
                advice about university life, courses, and campuses. Through
                peer-to-peer interactions, Unibuddy enables prospective students
                to make informed decisions about their higher education journey,
                fostering a sense of community and support throughout the
                application process. The platform facilitates meaningful
                connections and empowers students to explore their educational
                options with confidence.
              </p>
              <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 space-x-2 mx-auto w-full justify-center">
                <div>
                <motion.div
                  whileHover={{
                    scale: 1.25,
                  }}
                  className="text-center items-center justify-center"
                >
                  <button
                    // type="button"
                    // style={{ backgroundColor: '#0077B5' }}
                    // className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-20 mt-3 flex justify-center"
                    className="text-center items-center justify-center"
                    onClick={() =>
                      window.open("https://unibuddy.com/", "_blank")
                    }
                  >
                    {/* Website */}
                    <div class="flex mt-3 w-60 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center text-center">
                      <div class="mr-3 w-30 mx-auto">
                        {/* <svg viewBox="0 0 384 512" width="30"> */}
                          {/* <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/> */}
                          <img src={website} className="h-10 w-10 rounded-full" />
                        {/* </svg> */}
                      </div>
                      <div>
                        <div class="text-xs text-center">Open on</div>
                        <div class="text-2xl font-semibold font-sans -mt-1 text-center">
                          Website
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
                </div>
                <div>
                <motion.div
                  whileHover={{
                    scale: 1.25,
                  }}
                  className="text-center items-center justify-center"
                >
                  <button
                    // type="button"
                    // style={{ backgroundColor: '#0077B5' }}
                    // className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-20 mt-3 flex justify-center"
                    className="text-center items-center justify-center"
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.unibuddy&hl=en&gl=US",
                        "_blank"
                      )
                    }
                  >
                    {/* <div class="flex mt-3 w-60 h-14 bg-black text-white rounded-lg items-center justify-center">
                      <div class="mr-3">
                        <svg viewBox="30 336.7 120.9 129.2" width="30">
                          <path
                            fill="#FFD400"
                            d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                          />
                          <path
                            fill="#FF3333"
                            d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                          />
                          <path
                            fill="#48FF48"
                            d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                          />
                          <path
                            fill="#3BCCFF"
                            d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">GET IT ON</div>
                        <div class="text-xl font-semibold font-sans -mt-1">
                          Google Play
                        </div>
                      </div>
                    </div> */}
                    <div class="flex mt-3 w-60 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center text-center">
                      <div class="mr-3 w-30 mx-auto">
                        {/* <svg viewBox="0 0 384 512" width="30"> */}
                          {/* <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/> */}
                          <img src={gplay} className="h-10 w-10 rounded-full" />
                        {/* </svg> */}
                      </div>
                      <div>
                        <div class="text-xs text-center">GET IT ON</div>
                        <div class="text-2xl font-semibold font-sans -mt-1 text-center">
                          Google Play
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
                </div>
                <div>
                <motion.div
                  whileHover={{
                    scale: 1.25,
                  }}
                  className="text-center items-center justify-center"
                >
                  <button
                    // type="button"
                    // style={{ backgroundColor: '#0077B5' }}
                    // className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-20 mt-3 flex justify-center"
                    className="text-center items-center justify-center"
                    onClick={() =>
                      window.open(
                        "https://apps.apple.com/us/app/unibuddy/id1238171778",
                        "_blank"
                      )
                    }
                  >
                    {/* <div class="flex mt-3 w-60 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center">
                      <div class="mr-3">
                        <svg viewBox="0 0 384 512" width="30">
                          <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">Download on the</div>
                        <div class="text-2xl font-semibold font-sans -mt-1">
                          App Store
                        </div>
                      </div>
                    </div> */}
                    <div class="flex mt-3 w-60 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center text-center">
                      <div class="mr-3 w-30 mx-auto">
                        {/* <svg viewBox="0 0 384 512" width="30"> */}
                          {/* <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/> */}
                          <img src={apple} className="h-10 w-10 rounded-full" />
                        {/* </svg> */}
                      </div>
                      <div>
                        <div class="text-xs text-center">Download on the</div>
                        <div class="text-2xl font-semibold font-sans -mt-1 text-center">
                          App Store
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniBuddy;
