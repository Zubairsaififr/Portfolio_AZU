import React, { useEffect } from 'react'
import Nav from './components/Nav/Nav.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

import Contact from './components/Contact/Contact.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
import ExperienceSection from './components/ExperienceSection/ExperienceSection.jsx'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
    });
  }, []);
  return (
    <>
    
    < Nav/>
    <Home/>
    <About/>
    {/* <Project/> */}
    <ExperienceSection/>
    <Contact/>
    
    </>
  )}

export default App