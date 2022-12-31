import React from 'react'
import HeroSection from './HeroSection'

const About = () => {
  const aboutData={
    top_data:'I am',
    name:'Ankita Kulkarni',
    para:'I am Third Year Undergrad student at Government College Of Engineering, Karad..and I hope this web application will help you out.\n All the very Bestt!!',
    img:'./assets/about'
  }
  return (
    <div>
      <HeroSection {...aboutData}/>
    </div>
  )
}

export default About
