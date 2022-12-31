import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeroSection.css'
const HeroSection = (props) => {
  return (
    <div className='container'>
      <div className='container-grid'>
        <div className='hero-data'>
            <p className='hero-top-data'>{props.top_data}</p>
            <h2 className='hero-heading'>
                {props.name}
            </h2>
            <p className='hero-para'>
                {props.para}
            </p>
            <button className='contact-me'> <NavLink to='/contact'>Contact Me</NavLink> </button>
        </div>
        <div className='hero-img'>
            <picture>
                <img src={props.img} height={100}></img>
            </picture>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
