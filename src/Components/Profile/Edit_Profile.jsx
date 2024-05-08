import React from 'react';
import avatarImage from '../../images/avatar.jpg';

const EditProfile = () => {
  return (
    <div className="flex flex-col flex-1 p-4 h-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold p-4">EDIT PROFILE</h1>
        <img src={avatarImage} alt="Avatar" width={80} height={80} className="md:mr-40 mb-4 md:mb-0" />
      </div>
      <div className="px-4 py-8 space-y-4 md:mr-20">
        <form>
          <div className="space-y-4">
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
              <label htmlFor="firstName" className="text-lg font-bold">First Name</label>
              <input id="firstName" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder='John' />
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
              <label htmlFor="lastName" className="text-lg font-bold">Last Name</label>
              <input id="lastName" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder='Smith' />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-lg font-bold">Email</label>
              <input id="email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder='johns342@gmail.com' />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="contact_number" className="text-lg font-bold">Contact Number</label>
              <input id="contact_number" type="number" className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder='+44 20 1234 5678' />
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
              <label htmlFor="city" className="text-lg font-bold">City</label>
              <input id="city" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder='London' />
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
              <label htmlFor="country" className="text-lg font-bold">Country</label>
              <input id="country" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder='UK' />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="pwd" className="text-lg font-bold">Password</label>
              <input id="pwd" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder='xxxxxxxx'/>
            </div>
          </div>
          <div className="flex flex-row space-x-4 mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Save
            </button>
            <button
              className="bg-white text-blue font-bold py-2 px-4 border border-gray-500 hover:bg-gray-300 rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
