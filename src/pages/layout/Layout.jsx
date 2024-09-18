import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Element } from "react-scroll";
import Home from '../home/Home'

const Layout = () => {
  return (
    <>
      <Header/>
      <Element name='Home-Section'>
        <Home/>
      </Element>
      <Footer/>
    </>
  )
}

export default Layout
