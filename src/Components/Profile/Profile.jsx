import { useState } from "react";
import avatarImage from '../../images/avatar.jpg';
import controlIcon from '../../images/control.png';
import profileImage from '../../images/profile_sidebar.jpg';
import editProfileImage from '../../images/edit_profile_sidebar.png';
import messageImage from '../../images/message_sidebar.png';
import listingsImage from '../../images/listings_sidebar.jpg';
import itemsBoughtImage from '../../images/items_bought_sidebar.png';

const Profile = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Profile", image: profileImage },
    { title: "Edit Profile", image: editProfileImage },
    { title: "Message", image: messageImage },
    { title: "Listings", image: listingsImage },
    { title: "Items Bought", image: itemsBoughtImage },  
  ];

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-70 "
        } bg-green-900 h-full-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={controlIcon}
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="Control Icon"
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-bold text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            UniMarket
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center gap-x-4 
              ${index === 0 ? "bg-light-white" : ""} `}
            >
              <img src={Menu.image} alt={Menu.title} width={40} height={40}/>
              <span className={`${!open && "hidden"} text-white origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold p-4">EDIT PROFILE</h1>
          <img src={avatarImage} alt="Avatar" width={80} height={80} className='md:mr-40 mb-4 md:mb-0'></img>
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
                className="bg-white text-blue font-bold py-2 px-4  border-blue-700 hover:bg-gray-300"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
