import React from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import siddhant from "../../images/sidhanth-Photoroom.png-Photoroom.png";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row sm:flex-col justify-center items-center w-screen  bg-white">
        {/* COMPONENT CODE */}
        <div className="sm:block md:flex md:flex-row md:mt-[3rem] mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                defaultValue={""}
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <div class="flex items-center gap-4">
                <img class="w-20 h-20 rounded-full" src={siddhant} alt="" />
                <div class="font-medium">
                  <div>Mr. Siddhant Jain</div>
                  <div class="text-sm text-gray-400">Founder</div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-400 mt-3">
                  We believe in evaluating your true potential and aspirations,
                  providing tailored advice to help you choose the best course
                  and university that aligns with your goals.
                </p>
              </div>
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                </div>

                <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
              </div>
              <i className="fas fa-map-marker-alt pt-2 pr-2">
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-phone-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Connect</h2>
                      <div className="flex flex-row gap-x-2">
                        <button
                          type="button"
                          class="text-blue-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center me-2"
                        >
                          <FaLinkedin />
                          LinkedIn
                        </button>
                        <button
                          type="button"
                          class="text-blue-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center me-2"
                        >
                          <MdEmail />
                          Email
                        </button>
                      </div>
                    </div>
                  </i>
                </div>
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-phone-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      {/* <h2 className="text-2xl">Call Us</h2>
                      <div className="text-gray-400 flex flex-row gap-x-2">
                        <p>Telephone:</p>
                        <p>1234567890</p>
                      </div>
                      <div className="text-gray-400 flex flex-row gap-x-2">
                        <p>Fax:</p>
                        <p>1234567890</p>
                      </div> */}
                    </div>
                  </i>
                </div>
                {/* <i className="fas fa-phone-alt pt-2 pr-2">
                                    <div className="flex my-4 w-2/3 lg:w-1/2">
                                        <a
                                            href="https://www.facebook.com/ENLIGHTENEERING/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                                        >
                                            <i className="fab fa-facebook-f text-blue-900"></i>
                                        </a>
                                        <i className="fab fa-facebook-f text-blue-900">
                                            <a
                                                href="https://www.linkedin.com/company/enlighteneering-inc-"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                                            >
                                                <i className="fab fa-linkedin-in text-blue-900"></i>
                                            </a>
                                            <i className="fab fa-linkedin-in text-blue-900"></i>
                                        </i>
                                    </div>
                                    <i className="fab fa-facebook-f text-blue-900">
                                        <i className="fab fa-linkedin-in text-blue-900"></i>
                                    </i>
                                </i> */}
              </i>
            </div>
            {/* <i className="fas fa-map-marker-alt pt-2 pr-2">
                            <i className="fas fa-phone-alt pt-2 pr-2">
                                <i className="fab fa-facebook-f text-blue-900">
                                    <i className="fab fa-linkedin-in text-blue-900"></i>
                                </i>
                            </i>
                        </i> */}
          </div>

          <i className="fas fa-map-marker-alt pt-2 pr-2">
            <i className="fas fa-phone-alt pt-2 pr-2">
              <i className="fab fa-facebook-f text-blue-900">
                <i className="fab fa-linkedin-in text-blue-900"></i>
              </i>
            </i>
          </i>
        </div>
        <i className="fas fa-map-marker-alt pt-2 pr-2">
          <i className="fas fa-phone-alt pt-2 pr-2">
            <i className="fab fa-facebook-f text-blue-900">
              <i className="fab fa-linkedin-in text-blue-900">
                {/* COMPONENT CODE */}
              </i>
            </i>
          </i>
        </i>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
