import { useState } from "react";
import controlIcon from '../../images/control.png';
import profileImage from '../../images/profile_sidebar.jpg';

import messageImage from '../../images/message_sidebar.png';
import listingsImage from '../../images/listings_sidebar.jpg';
import itemsBoughtImage from '../../images/items_bought_sidebar.png';
import Main_Profile from "./Main_Profile";
import product_list from '../../images/product_list.png'
import UniMarketForm from "../UniMarketForm/UniMarketForm";
import View_listings from "./View_listings";
import { useNavigate } from "react-router-dom";
// import Axios from 'axios'

const Profile = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("View profile");

  const handleMenuClick = (title) => {
    setSelectedMenu(title);
  };

  const renderSelectedPage = () => {
    switch (selectedMenu) {
      case "View profile":
        return <Main_Profile/>;
      
      // case "Edit profile":
      //   return <Edit_Profile/>;

      case "View listings":
        return <View_listings/>

      case "List a product":
        return <UniMarketForm/>
        
      default:
        return null;
    }
  };

  const navigate = useNavigate()

  // const handleLogout = async () => {
  //   try {
  //     // Send a request to the backend to logout the user
  //     const response = await Axios.post('http://localhost:8080/api/logout');

  //     if (response.status === 200) {
  //       // Clear any client-side authentication tokens or session data
  //       // Example: localStorage.removeItem('token');

  //       // Redirect the user to the login page
  //       navigate('/unimarket/login');
  //     } else {
  //       console.error('Logout failed:', response.data.error);
  //     }
  //   } catch (error) {
  //     console.error('Error during logout:', error);
  //   }
  // };

  const backto = () =>{
    navigate('/unimarkethome')
  }

  const Menus = [
    { title: "View profile", image: profileImage },
    // { title: "Edit profile", image: editProfileImage },
    { title: "View listings", image: listingsImage },
    {title:  "List a product",image:product_list},
    { title: "Products bought", image: itemsBoughtImage },  
    { title: "Message", image: messageImage },
  ];

  return (
    <div className="flex h-full">
      <div
        className={` ${
          open ? "w-72" : "w-70 "
        } bg-green-400 h-full p-5 pt-8 relative duration-300`}
        style={{ height: "180vh" }}
      >
        <img
          src={controlIcon}
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="Control Icon"
        />
        <div className="flex gap-x-4 items-center" onClick={backto}>
          <h1
            className={`text-gray-800 origin-left font-bold text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            UNIMARKET
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
              <span className={`${!open && "hidden"} text-gray-800 font-bold origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
            
          ))}
        </ul>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
      <div className="flex-1 p-4">
        {renderSelectedPage()} {/* Render the selected page */}
        
      </div>
    </div>
  );
};

export default Profile;
