import React, { useEffect, useState, createContext }  from "react";

import './App.css'
// import './responsive.css'

import { ChatEngine } from 'react-chat-engine';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NewHome from "./Pages/NewHome/NewHome";
import NewHome2 from "./Pages/NewHome2/NewHome2";
import Resume from "./Pages/Resume/Resume";
import NewResumePg from "./Pages/NewResumePg/NewResumePg";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Ambassador from "./Pages/Ambassador/Ambassador";
import NewConnectPg from "./Pages/NewConnectPg/NewConnectPg";
import Contactus from "./Components/Contactus/Contactus";
import Register from "./Components/Register/Register";
import Scholarship from "./Pages/Scholarship/Scholarship";
import NewScholarPg from "./Pages/NewScholar/NewScholarPg";
import AddScholarship from "./Components/Register/AddScholarship";
import CoursePg from "./Pages/CoursePg/CoursePg";
import Page4 from "./Pages/Page4/Page4";
import SettleInPg from "./Pages/SettleInPg/SettleInPg";
import Page5 from "./Pages/Page5/Page5";
import AlreadyInPg from "./Pages/AlreadyInPg/AlreadyInPg";
import GRE from "./Pages/GRE/GRE";
import Alldetails from "./Components/Register/Alldetails";
import Editscholarship from "./Components/Register/Editscholarship";
import EditUnivdetails from "./Components/Register/EditUnivdetails";
import AddCourses from "./Components/Register/AddCourses";
import EditCourses from "./Components/Register/EditCourses";
import Coursesdetails from "./Components/Scholarship/ScholarshipTables/Coursesdetails";
import University from "./Components/University/University";
import Example from "./Components/NewTable/Table";
import FindmyFriend from "./Pages/FindmyFriend/Findmyfriend";
import UniMarketHomePg from "./Pages/UniMarketHomePg/UniMarketHomePg";
import Chat from "./Pages/Chat/Chat";
import AdminPg from "./Pages/AdminPg/AdminPg";
import Product from "./Pages/ProductDetail/ProductPg";
import UniMarketFormPg from "./Pages/UniForm/UniFormPg";
import Login from './Components/Login/Login'
import Signup from "./Components/Signup/Signup";
import Profile from './Components/Profile/Profile'



import Header from './Components/Header_unimarketplace/header'
import Footer from './Components/Footer_unimarketplace/index'
import Home_UMP from "./Pages/Home_UMP";
import About_UMP from './Pages/About_UMP/index'
import Listing from './Pages/Listing/index'
import NotFound from './Pages/NotFound/index'
import DetailsPage from './Pages/Details/index'
import Checkout from './Pages/checkout'
import Cart from './Pages/cart'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Loader from './images/loading.gif';

import data from './data/data'

import axios from "axios";

const MyContext = createContext();

function App() {

  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isopenNavigation, setIsopenNavigation] = useState(false);

  const [isLogin, setIsLogin] = useState();
  const [isOpenFilters, setIsopenFilters] = useState(false);

  const [cartTotalAmount, setCartTotalAmount] = useState();

  useEffect(() => {
    // getData('http://localhost:5000/productData');
     getCartData("http://localhost:5000/cartItems");

    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);

   
      setTimeout(() => {
        setProductData(data[1]);
        setIsloading(false);
      }, 3000);


  
  }, []);

 

  const getCartData = async (url) => {
    try {
        await axios.get(url).then((response) => {
            setCartItems(response.data);
        })

    } catch (error) {
        console.log(error.message);
    }
}

  const addToCart = async (item) => {
    item.quantity = 1;

    try {
      await axios.post("http://localhost:5000/cartItems", item).then((res) => {
        if (res !== undefined) {
          setCartItems([...cartItems, { ...item, quantity: 1 }])
        }
      })
    } catch (error) {
      console.log(error)
    }

  }




  const removeItemsFromCart = async(id) => {
    const response = await axios.delete(`http://localhost:5000/cartItems/${id}`);
    if (response !== null) {
        getCartData("http://localhost:5000/cartItems");
    }
  }

  const emptyCart = () => {
    setCartItems([])
  }


  const signIn = () => {
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
  }


  const signOut = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  }


  const openFilters=()=>{
    setIsopenFilters(!isOpenFilters)
  }

  const value = {
    cartItems,
    isLogin,
    // windowWidth,
    isOpenFilters,
    addToCart,
    removeItemsFromCart,
    emptyCart,
    signOut,
    signIn,
    openFilters,
    isopenNavigation,
    setIsopenNavigation,
    setCartTotalAmount,
    cartTotalAmount,
    setCartItems,
    cartItems
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NewHome2 />}></Route>
          <Route path="/resume" element={<NewResumePg />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Connect" element={<NewConnectPg />}></Route>
          <Route path="/scholarship" element={<NewScholarPg />}></Route>
          <Route path="/course" element={<CoursePg />}></Route>
          <Route path="/SettleinUK" element={<SettleInPg />}></Route>
          <Route path="/AlreadyinUk" element={<AlreadyInPg />}></Route>
          <Route path="/Ielts-Gre" element={<GRE />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/addunivdetails" element={<Register />}></Route>
          <Route path="/table" element={<Example />}></Route>
          {/* <Route path="/addschodetails" element={<AddScholarship />}></Route>
          <Route path="/editunivdetails/:name" element={<EditUnivdetails />}></Route>
          <Route path="/editschodetails/:name" element={<Editscholarship />}></Route>
          <Route path="/editcoursedetails/:name" element={<EditCourses />}></Route> */}
          <Route path="/data" element={<Alldetails />}></Route>
          <Route path="/addcourses" element={<AddCourses />}></Route>
          <Route path="/course/:name" element={<Coursesdetails />}></Route>
          <Route path="/university" element={<University />}></Route>
          <Route path="/findmyfriend" element={<FindmyFriend />}></Route>
          <Route path="/unimarkethome" element={<UniMarketHomePg />}></Route>
          <Route path="/unimarketchat" element={<Chat />}></Route>
          <Route path="/unimarketadmin" element={<AdminPg />}></Route>
          <Route path="/unimarketproduct" element={<Product />}></Route>
          <Route path="/unimarketform" element={<UniMarketFormPg />}></Route>
          <Route path="/unimarket/login" element={<Login/>}></Route>
          <Route path="/unimarket/signup" element={<Signup/>}></Route>
          <Route path="/unimarket/profile" element={<Profile/>}></Route>
          <Route
            path="/unimarketplacehome"
            element={
              data.productData.length !== 0 && (
                <MyContext.Provider value={value}>
                  {isLoading && <div className='loader'><img src={Loader} alt="Loading..." /></div>}
                  <Header data={data.productData} />
                  <Routes>
                    <Route path="/" element={<Home_UMP data={data.productData} />} />
                    <Route path="/cat/:id" element={<Listing data={data.productData} single={true} />} />
                    <Route path="/cat/:id/:id" element={<Listing data={data.productData} single={false} />} />
                    <Route path="/product/:id" element={<DetailsPage data={data.productData} />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </MyContext.Provider>
              )
            }
          />
          
          
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
export {MyContext}