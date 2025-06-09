import React from 'react'
import NavBar_Services from '../components/NavBar_Services'
import Title from  '../components/Title'
import ServicesPage from '../components/ServicesPage'
import Courses from '../components/Courses'
import GitHub from '../components/GitHub'

const Services = () => {
  return (
    <div>
      <NavBar_Services/>
      <GitHub/>
      <div  className="pt-10 pb-10">

        <Title text1={'Our Offerings'}/>
      </div>
      <Courses/>
      <ServicesPage/>
    </div>
  )
}

export default Services
