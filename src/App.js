import React from 'react'
import Navbar from './Navbar'
import About from './About'
import {Route,Routes}from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>

            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
        </Routes>
      
    </div>
  )
}

export default App
