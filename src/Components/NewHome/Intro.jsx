import React from "react";

const Intro = () => {
    return (
        <>
          <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-200 to-purple-500" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-400" />
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900  font-bold text-4xl md:text-6xl xl:text-6xl">
                Ready to take Admission in{" "}
                <span className="text-black  bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  UK
                </span>
              </h1>
              <p className="mt-8 text-gray-700 ">
                Best Place for finding the stuff for you
              </p>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Intro