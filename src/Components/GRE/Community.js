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

            <form class="w-full mx-auto justify-center items-center text-center flex flex-col space-y-2">
            <div className="justify-center items-center text-center">
            <div className={`flex ${isMobile ? 'flex-col space-y-5' : 'flex-row'} space-x-5`}>
            <div  className="flex flex-col justify-center text-center items-center">
              <div className="justify-center text-center items-center">Select one or both</div>
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
            </div>
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">IELTS</button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">GRE</button> */}
            <div className="justify-center text-center items-center">
                Company Name / Source
                <input type="text" id="companyname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5" placeholder="company information" required />
            </div>
            <div className="justify-center text-center items-center">
                Link / Contact Info
                <input type="text" id="info" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5" placeholder="email, messages ..." required />
            </div>
        </div>
            <div className="justify-center text-center items-center">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-80 px-5 py-2.5 text-center mt-5 justify-center items-center">Contribute</button>
            </div>
            </div>
          </form>
        </div> 
        </section>


    )
}

export default Community