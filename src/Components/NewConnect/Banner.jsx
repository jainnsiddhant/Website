import React from "react";
import connectbg from "../../images/connectbg.jpg";

export default function Banner() {
  return (
    <div id="ban">
      <div
        className="h-[10%] w-[80%] mx-auto rounded-2xl bg-center p-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${connectbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-10 text-4xl font-bold text-center text-white">
            Connect and Read Blogs
          </h1>
          <p className="text-lg text-center text-white mt-8 w-[90%]">
            Discover vibrant connections with student ambassadors and delve into
            captivating featured blogs on our platform.
          </p>
          <div className="mt-10 mb-10 space-x-2">
            <button
              className="px-6 py-2 text-center text-white rounded-md shadow-md"
              style={{ backgroundColor: "#2563EB" }}
            >
              <a href="#connectambassador">Connect</a>
            </button>
            <button
              className="px-6 py-2 text-center text-white rounded-md shadow-md"
              style={{ backgroundColor: "#2563EB" }}
            >
              {/* <a href="#resumebuild">Connect</a> */}
              <a href="#featuredblogs">Read</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// const Banner = () => {
//   return (
//     <div className="text-center flex justify-center items-center flex-col mt-[40px] gap-[20px] p-[1em]">
//       <div>
//         <h1 className="text-3xl font-bold">
//           <span className="text-blue-600">PrimeKitUI,</span> Build your app in
//           seconds
//         </h1>

//         <h1 className="text-3xl font-bold">
//           The best and free open source for react+tailwindcss
//         </h1>
//       </div>

//       <p className="text-gray-600 md:w-[600px] text-center">
//         an open-source project that combines the power of React and the
//         flexibility of Tailwind CSS to streamline your web development
//         experience
//       </p>
//       <div className="grid items-center ">
//         <button className="py-[0.6em] px-[0.8em] bg-blue-600 rounded-md text-white hover:bg-blue-900">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;
