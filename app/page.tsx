'use client'
import React from 'react'
import Header from './component/header'
import Hero from './component/hero'
import Logo from './component/logo'
import Courses from './component/courses'
import Achievement from './component/achievement'
import Mycourses from './component/mycourses'
import Ourteam from './component/ourteam'
import Customer from './component/customer'
import Footer from './component/footer'
import Myfooter from './component/myfooter'
import AOS from "aos"
import  "aos/dist/aos.css"
import { useEffect } from 'react'


const Page = () => {
  useEffect(() =>{
AOS.init({})
  }, [])
  return (
    <div data-aos="fade-right">
      <Header/>
      <Hero/>
      <Logo/>
      <Courses/>
      <Achievement/>
      <Customer/>
      <Mycourses/>
      <Ourteam/>
      <Footer/>
      <Myfooter/>
    </div>
  )
}

export default Page
