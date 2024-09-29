import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Element } from "react-scroll";
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/contact';

const Layout = () => {
  return (
    <>
      <Header/>
      <Element name='home-section'>
        <Home/>
      </Element>
      <Element name='about-section'>
        <About/>
      </Element>
      <Element name='projects-section'>
        <Projects/>
      </Element>
      <Element name='contact-section'>
        <Contact/>
      </Element>
      <Footer/>
    </>
  )
}

export default Layout
