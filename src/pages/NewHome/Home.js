import React from 'react';
import NavBar from './NavBar'
import Main from './Main'
import About from './About'
import Event from './Event'
import Contact from './Contact';
import Footer from './Footer'


export default function Home() {

  return (
    <React.Fragment>

      <NavBar />
      <Main />
      <About />
      <Event />
      <Contact />
      <Footer />

   </React.Fragment>

  );
}

