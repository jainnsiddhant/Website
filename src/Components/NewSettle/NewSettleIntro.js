import React from "react";
import homebg from '../../images/homebg.jpg';

const NewSettleIntro = () => {
    <>
                <section>
  {/* Enlarged Image */}
  <div className="absolute">
  <img src={homebg} alt="background" className="inset-0 w-[90%] h-[80%] m-auto object-cover rounded-lg shadow-lg" />
  </div>

  {/* Content */}
  <div className="relative top-0 text-gray-300 inset-0 flex flex-col justify-center items-center z-10">
    <h1 className="text-5xl font-bold mb-4">Welcome Page</h1>
    <p className="text-lg md:text-xl mb-8">Find your university, connect with ambassadors and settle abroad.</p>
    
    {/* Search Bar */}
    <div className="max-w-lg mx-auto">
      <input type="text" placeholder="Search..." className="w-full py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:border-primaryColor" />
    </div>
  </div>
</section>

    </>
}


export default NewSettleIntro;