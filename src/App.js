import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contactus from "./Components/Contactus/Contactus";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
