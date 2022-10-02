import React from 'react';
import NavBar from './NavBar'
import Main from './Main'
import About from './About'
import Event from './Event'
import Contact from './Contact';
import Footer from './Footer'
import Calender from './Calender'
import AboutUs from './AboutUs';


export default function Home() {

  return (
    <React.Fragment>

      <NavBar />
      <Main />
      <About />
      <AboutUs />
      <Event />
      <Contact />
      

   </React.Fragment>

  );
}

