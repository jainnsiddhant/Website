import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NewHome from "./Pages/NewHome/NewHome";
import Resume from "./Pages/Resume/Resume";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contactus from "./Components/Contactus/Contactus";
import Scholarship from "./Pages/Scholarship/Scholarship";
import Page4 from "./Pages/Page4/Page4";
import Page5 from "./Pages/Page5/Page5";
import Coursesdetails from "./Components/Scholarship/ScholarshipTables/Coursesdetails";

function App() {
  return (
    <>
      <Router>c:\Users\prish\OneDrive\Desktop\internship_siddhant\Website\src\Pages\NewHome
        <Routes>
          <Route path="/" element={<NewHome />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/scholarship" element={<Scholarship />}></Route>
          <Route path="/Page4" element={<Page4 />}></Route>
          <Route path="/Page5" element={<Page5 />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          {/* <Route path="/editcoursedetails/:name" element={<EditCourses />}></Route>
          <Route path="/data" element={<Alldetails />}></Route>
          <Route path="/addcourses" element={<AddCourses />}></Route> */}
          <Route path="/course/:name" element={<Coursesdetails/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
