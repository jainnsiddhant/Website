import React, { useState } from 'react';
import avatarImage from '../../images/avatar.jpg';

const MainProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const renderContent = () => {
    if (isEditMode) {
      return (
        <div className="space-y-4">
          <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="firstName" className="text-lg font-bold">First Name</label>
            <input type="text" id="firstName" name="firstName" className="border border-gray-300 rounded-full p-2" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="lastName" className="text-lg font-bold">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="border border-gray-300 rounded-full p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-lg font-bold">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-300 rounded-full p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="contactNumber" className="text-lg font-bold">Contact Number</label>
            <input type="text" id="contactNumber" name="contactNumber" className="border border-gray-300 rounded-full p-2" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="city" className="text-lg font-bold">City</label>
            <input type="text" id="city" name="city" className="border border-gray-300 rounded-full p-2" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="country" className="text-lg font-bold">Country</label>
            <input type="text" id="country" name="country" className="border border-gray-300 rounded-full p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-lg font-bold">Password</label>
            <input type="password" id="password" name="password" className="border border-gray-300 rounded-full p-2" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-4">
          <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="firstName" className="text-lg font-bold">First Name</label>
            <div className="border border-gray-300 rounded-full p-2">John</div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="lastName" className="text-lg font-bold">Last Name</label>
            <div className="border border-gray-300 rounded-full p-2">Smith</div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-lg font-bold">Email</label>
            <div className="border border-gray-300 rounded-full p-2">johns342@gmail.com</div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="contactNumber" className="text-lg font-bold">Contact Number</label>
            <div className="border border-gray-300 rounded-full p-2">+44 20 1234 5678</div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="city" className="text-lg font-bold">City</label>
            <div className="border border-gray-300 rounded-full p-2">London</div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <label htmlFor="country" className="text-lg font-bold">Country</label>
            <div className="border border-gray-300 rounded-full p-2">UK</div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-lg font-bold">Password</label>
            <div className="border border-gray-300 rounded-full p-2">******</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col flex-1 p-4 h-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold p-4">PROFILE</h1>
        <img src={avatarImage} alt="Avatar" width={80} height={80} className="md:mr-40 mb-4 md:mb-0" />
      </div>
      <div className="px-4 py-8 space-y-4 md:mr-20">
        {renderContent()}
        <button onClick={handleEditClick} className="text-lg font-bold px-6 py-2 rounded bg-blue-500 text-white hover:bg-black ">
          {isEditMode ? 'Cancel' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default MainProfile;
