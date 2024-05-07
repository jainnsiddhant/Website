import { useState } from "react";
import controlIcon from '../../images/control.png';
import profileImage from '../../images/profile_sidebar.jpg';
import editProfileImage from '../../images/edit_profile_sidebar.png';
import messageImage from '../../images/message_sidebar.png';
import listingsImage from '../../images/listings_sidebar.jpg';
import itemsBoughtImage from '../../images/items_bought_sidebar.png';
import Edit_Profile from "./Edit_Profile";
import Main_Profile from "./Main_Profile";

const Profile = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Profile"); // Initially select the "Profile" menu option

  const handleMenuClick = (title) => {
    setSelectedMenu(title);
  };

  const renderSelectedPage = () => {
    switch (selectedMenu) {
      case "Profile":
        return <Main_Profile/>;
      
      case "Edit Profile":
        return <Edit_Profile/>;
        
      default:
        return null;
    }
  };

  const Menus = [
    { title: "Profile", image: profileImage },
    { title: "Edit Profile", image: editProfileImage },
    { title: "Message", image: messageImage },
    { title: "Listings", image: listingsImage },
    { title: "Items Bought", image: itemsBoughtImage },  
  ];

  return (
    <div className="flex h-full">
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
              onClick={() => handleMenuClick(Menu.title)} // Handle menu item click
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-xl items-center gap-x-4 
              ${selectedMenu === Menu.title ? "bg-light-white" : ""} `}
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
        {renderSelectedPage()} {/* Render the selected page */}
      </div>
    </div>
  );
};

export default Profile;
