import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // ✅ updated import
import Hero from './components/Hero';
import {  Moon } from 'lucide-react';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Herotemp from './components/Herotemp';


const App = () => {
  return (
    <div className="font-poppins bg-[#D7E0EA]">
      {/* Navbar */}
      

      {/* Hero Section */}
      <div className=" " id="hero">
        <Herotemp />
      </div>

      {/* About Section with scroll target ID */}
      <div id="about" className="">
        <About />
      </div>
      <div id='skills'>
        <Skills/>
      </div>
      <div id='projects' className=''>
        <Projects/>
      </div>
       <div id='contact' className=''>
      <Contact/>
      </div>
    </div>
  );
};

export default App;
