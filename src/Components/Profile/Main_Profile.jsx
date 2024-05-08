import React from 'react';
import avatarImage from '../../images/avatar.jpg';

const MainProfile = () => {
  return (
    <div className="flex flex-col flex-1 p-4 h-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold p-4">PROFILE</h1>
        <img src={avatarImage} alt="Avatar" width={80} height={80} className="md:mr-40 mb-4 md:mb-0" />
      </div>
      <div className="px-4 py-8 space-y-4 md:mr-20">
        
          <div className="space-y-4">
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="firstName" className="text-lg font-bold">First Name</label>
            <div className="border border-gray-300 rounded-full p-2">{/* Replace with dynamic content */}John</div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="lastName" className="text-lg font-bold">Last Name</label>
            <div className="border border-gray-300 rounded-full p-2">{/* Replace with dynamic content */}Smith</div>
            </div>
            <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-lg font-bold">Email</label>
            <div className="border border-gray-300 rounded-full p-2">{/* Replace with dynamic content */}johns342@gmail.com</div>
            </div>
            <div className="flex flex-col space-y-2">
            <label htmlFor="contactNumber" className="text-lg font-bold">Contact Number</label>
            <div className="border border-gray-300 rounded-full p-2">{/* Replace with dynamic content */}+44 20 1234 5678</div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="city" className="text-lg font-bold">City</label>
            <div className="border border-gray-300 rounded-full p-2">{/* Replace with dynamic content */}London</div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="country" className="text-lg font-bold">Country</label>
            <div className="border border-gray-300 rounded-full p-2">{/* Replace with dynamic content */}UK</div>
            </div>
            <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-lg font-bold">Password</label>
            <div className="border border-gray-300 rounded-full p-2">{/* Replace with dynamic content */}******</div>
            </div>
          </div>
          
        
      </div>
    </div>
  );
}

export default MainProfile;


