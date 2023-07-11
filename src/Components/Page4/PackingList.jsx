


import React from 'react';
import { FaGift } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

const PackingList = () => {
  return (
    <>
      {/* Packing list ms doc file TABLE */}
      <div id="packinglist" className="Packing List MS Doc File md:w-[80vw] mx-auto">
        <section className="rounded-xl">
        <h2 className="mb-8 text-center text-3xl tracking-tight font-bold text-gray-900">
                Packing List MS Doc File
        </h2>
          <p className="text-center md:text-left mt-3 mb-3">
          Moving to a new country requires careful planning We provide a comprehensive checklist to help you organize your belongings effectively. From essential documents like passports and identification cards to clothing suitable for the UK's weather conditions, we cover all the basics. We also suggest packing electronics, medications, toiletries, and important contacts, ensuring you're prepared for any situation that may arise during your transition.
          </p>
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mb-8 lg:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6 mx-auto main mt-24">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <FaGift
                    className="text-blue-700 mb-3" size={30}
                  />
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                      Need help to settle?
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-500">
                    Go to this step-by-step guideline process on how to certify for your weekly steps:
                  </p>
                  <p className="inline-flex items-center text-blue-600 hover:underline">
                    <a href="#">See our guideline</a>
                    <a><BiLinkExternal className="text-blue-700" size={20} /></a>
                  </p>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <FaGift
                    className="text-blue-700 mb-3" size={30}
                  />
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                      Need help to settle?
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-500">
                    Go to this step-by-step guideline process on how to certify for your weekly steps:
                  </p>
                  <p className="inline-flex items-center text-blue-600 hover:underline">
                    <a href="#">See our guideline</a>
                    <a><BiLinkExternal className="text-blue-700" size={20} /></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PackingList;
