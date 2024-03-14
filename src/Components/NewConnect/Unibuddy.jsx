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
          <div className="flex md:w-[80%] mt-2 mb-2">
            <div className="w-full flex flex-col justify-center mt-3 md:mt-0">
              <img
                src={UnibuddyLogo}
                alt="universityimage"
                className="mx-auto mb-2 h-[50%] w-[66.67%] sm:w-full"
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
              <div className="sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-3 space-x-2 mx-auto w-full justify-center">
                <div>
                <motion.div
                  whileHover={{
                    scale: 1.25,
                  }}
                  className="text-center items-center justify-center"
                >
                  <button
                    className="text-center items-center justify-center"
                    onClick={() =>
                      window.open("https://unibuddy.com/", "_blank")
                    }
                  >
                    {/* Website */}
                    <div class="flex mt-3 p-2 w-60 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center text-center">
                      <div class=" w-30 mx-auto">
                          <img src={website} className="h-10 w-10 rounded-full" />
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
                    className="text-center items-center justify-center"
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.unibuddy&hl=en&gl=US",
                        "_blank"
                      )
                    }
                  >
                    <div class="flex mt-3 p-2 w-60 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center text-center">
                      <div class=" w-30 mx-auto">
                      <img src={gplay} className="h-10 w-10 rounded-full" />
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
                    className="text-center items-center justify-center"
                    onClick={() =>
                      window.open(
                        "https://apps.apple.com/us/app/unibuddy/id1238171778",
                        "_blank"
                      )
                    }
                  >
                    <div class="flex mt-3 p-2 w-60 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center text-center">
                      <div class=" w-30 mx-auto">
                         <img src={apple} className="h-10 w-10 rounded-full" />
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
