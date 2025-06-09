import React from 'react'
import TestimoninalCarousel from '../components/TestimonialCarousel'
import Title from '../components/Title'

import OurPocess from '../components/OurPocess'
import FAQComponent from '../components/FAQComponent'
import NavBar_Web_dev from '../components/NavBar_Web_dev'
import GitHub from '../components/GitHub'
import ServiceDescription from '../components/ServicesDescription'
import Advantages from '../components/Advantages'
const Web_dev = () => {
  return (
    <div>
      <NavBar_Web_dev/>
      <GitHub/>
      <ServiceDescription/>
      <Advantages/>
      <OurPocess/>
      <Title text1={"Client Reviews"}/>
      <TestimoninalCarousel/>
      <FAQComponent/>
    </div>
  )
}

export default Web_dev
