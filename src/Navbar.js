import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaBookOpen } from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
import './Navbar.css'
import { useState } from 'react';
const Navbar = () => {
    const [showMediaIcons,setshowMediaIcons]=useState(false);
  return (
    <div className='Navbar'>
        <div className='Nav-name'>
            <h2><span>E</span>asy
            <span>E</span>ntrance
            </h2>
            
        </div>
        <div className= {showMediaIcons? 'Nav-content mobile-menu-link':'Nav-content' } >
            <ul>
            <NavLink to='/' ><li className='active-menu'> Home </li></NavLink>
      <NavLink to='/about'><li className='active-menu'>About Us</li></NavLink>
      <NavLink to='/contact'><li className='active-menu'>Contact Us</li></NavLink>

            </ul>
       
        </div>
        <div className='Nav-logo'>
            <ul className='logo'>
                <li>
                <FaBookOpen/>
                </li>
            </ul>
           
           
           
       
        <div className='hamburger-menu'>
                {/* <GiHamburgerMenu/> */}
                <a href='# ' onClick={()=>setshowMediaIcons(!showMediaIcons)} >
                    <GiHamburgerMenu/> 
                </a>
            </div>
            </div>
      
    </div>
  )
}

export default Navbar
