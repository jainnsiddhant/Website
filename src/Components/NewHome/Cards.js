import React from "react";
import resumehome from "../../images/resumehome.jpg";
import scholarhome from "../../images/scholarhome.jpg";
import coursehome from "../../images/coursehome.jpg";
import connecthome from "../../images/connecthome.jpg";
import settlehome from "../../images/settlehome.jpg";
import alreadyhome from "../../images/alreadyhome.jpg";

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0 mx-auto">
        
        <div
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${resumehome})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2 className="text-4xl font-semibold text-white mb-4 text-left"  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Resume</h2>
            <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Unlock your career potential.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${scholarhome})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2 className="text-4xl font-semibold text-white mb-4 text-left"  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Scholarship</h2>
            <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Unlock your career potential.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${coursehome})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2 className="text-4xl font-semibold text-white mb-4 text-left"  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Courses</h2>
            <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Unlock your career potential.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${connecthome})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2 className="text-4xl font-semibold text-white mb-4 text-left"  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Connect</h2>
            <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Unlock your career potential.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${settlehome})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2 className="text-4xl font-semibold text-white mb-4 text-left"  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Settle</h2>
            <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Unlock your career potential.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${alreadyhome})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2 className="text-4xl font-semibold text-white mb-4 text-left"  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Already</h2>
            <p className="text-lg text-gray-100 text-left" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Unlock your career potential.
            </p>
          </div>
        </div>

    </div>
  );
}
