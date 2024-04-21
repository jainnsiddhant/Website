import React, { useEffect, useState } from "react";
import community from "../../images/community.jpg";

const Community = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);


    return (
        <section>
           <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
                  Community
          </h2>
          <p className="mb-1 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Unlock your potential: Explore the Community, the gateway to countless
            academic opportunities.
          </p>

          <div className="mx-auto md:w-1/2 flex justify-center mt-5 mb-4">
              <img
                src={community}
                alt="communityimage"
                className="rounded-full"
              />
            </div>

            <form class="w-full mx-auto justify-center items-center flex flex-col space-y-2">
            <div className={`flex ${isMobile ? 'flex-col space-y-5' : 'flex-row'} space-x-5`}>
            <div className="flex space-x-5 my-auto">
                <div className="flex space-x-3 my-auto mx-auto">
                    <input type="checkbox" id="gre" name="gre-ielts" value="GRE" className="mt-5" />
                    <label htmlFor="gre" className="mt-4">GRE</label>
                </div>
                <div className="flex space-x-3 my-auto mx-auto">
                    <input type="checkbox" id="ielts" name="gre-ielts" value="IELTS" className="mt-5" />
                    <label htmlFor="ielts" className="mt-4">IELTS</label>
                </div>
            </div>
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">IELTS</button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">GRE</button> */}
            <div className="">
                Description
                <input type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="description" required />
            </div>
            <div className="">
                Name
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="name" required />
            </div>
        </div>
            <div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-80 px-5 py-2.5 text-center mt-5">Contribute</button>
            </div>
          </form>
        </div> 
        </section>


    )
}

export default Community