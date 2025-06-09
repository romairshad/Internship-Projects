import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Web_dev from './pages/Web_dev'
import Footer from './components/Footer'
const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element ={<Services/>}/>
        <Route path='/Web_dev/:CourseId' element = {<Web_dev/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
