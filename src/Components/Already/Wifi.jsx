import React from "react";
import { motion } from 'framer-motion';

const Wifi = () => {
    return(
        <section id="wifiproviders">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        WIFI Providers
                    </h2>
                    {/* <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        Recommendation only, consult banks before puchasing.
                    </p> */}
                </div>

                <div className="md:w-[80vw] mx-auto -mt-10">
          <section className="rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="container p-4 sm:p-4 border rounded-xl">
                <div className="overflow-x-auto mx-auto">
                    <p>
                    <ul class="space-y-4 list-disc list-inside text-center">
                       <li className="text-md">
                       BT Broadband
                        </li>
                       <li className="text-md">
                       EE Unlimited
                        </li>
                       <li className="text-md">
                       NOW Broadband
                        </li>
                       <li className="text-md">
                       Sky Broadband
                        </li>
                       <li className="text-md">
                       Virgin Media
                        </li>
                       <li className="text-md">
                       Vodafone
                        </li>
                    </ul>
                    </p>
                </div>
              </div>
            
            </div>
          </section>
          <div className="w-[80%] mx-auto">
                    <motion.div
                      whileHover={
                      {
                       scale: 1.25
                      }
                       }>
                    <button 
                        type="button" 
                        style={{ backgroundColor: '#FFA500' }}
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-1/4 mx-auto flex justify-center -mt-10" 
                        onClick={() => window.open('https://www.telegraph.co.uk/recommended/tech/best-broadband/', '_blank')}
                        >
                        Click for more Information
                    </button>
                    </motion.div>
                </div>
        </div>
   
            </section>
    )
}

export default Wifi