import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Alldetails from "./Components/Register/Alldetails";
import Editscholarship from "./Components/Register/Editscholarship";
import EditUnivdetails from "./Components/Register/EditUnivdetails";
import AddCourses from "./Components/Register/AddCourses";
import EditCourses from "./Components/Register/EditCourses";
import Coursesdetails from "./Components/Scholarship/ScholarshipTables/Coursesdetails";
import University from "./Components/University/University";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NewHome2 />}></Route>
          <Route path="/resume" element={<NewResumePg />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<NewConnectPg />}></Route>
          <Route path="/scholarship" element={<NewScholarPg />}></Route>
          <Route path="/course" element={<CoursePg />}></Route>
          <Route path="/SettleinUK" element={<SettleInPg />}></Route>
          <Route path="/AlreadyinUk" element={<AlreadyInPg />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/addunivdetails" element={<Register />}></Route>
          {/* <Route path="/addschodetails" element={<AddScholarship />}></Route>
          <Route path="/editunivdetails/:name" element={<EditUnivdetails />}></Route>
          <Route path="/editschodetails/:name" element={<Editscholarship />}></Route>
          <Route path="/editcoursedetails/:name" element={<EditCourses />}></Route> */}
          <Route path="/data" element={<Alldetails />}></Route>
          <Route path="/addcourses" element={<AddCourses />}></Route>
          <Route path="/course/:name" element={<Coursesdetails />}></Route>
          <Route path="/university" element={<University />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
