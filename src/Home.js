import React from 'react'
import Card from './Card'
import HeroSection from './HeroSection'

const Home = () => {
  const homeData={
    top_data:'This is',
    name:'Easy Entrance',
    para:' EasyEntance will help you through all previous year questions..and guid you through out ur journey.',
    img:'./assets/image.jpg'
  }
  return (
    <div>
      <HeroSection {...homeData} />
      <Card/>
    </div>
  )
}

export default Home
