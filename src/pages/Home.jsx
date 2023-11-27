import React from 'react'
import {  Clients, Footer, Hero, Mail, OurWorks, WeOffer, WhyChoosUs } from '../sections/home'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Clients/>
      <WeOffer/>
      <WhyChoosUs/>
      <OurWorks/>
      <Mail/>
      <Footer/>
    </div>
  )
}

export default Home
