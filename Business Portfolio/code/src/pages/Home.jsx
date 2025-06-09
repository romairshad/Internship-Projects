import React from 'react'
import NavBar from '../components/NavBar'
import Agile from '../components/Agile'
import GitHub from '../components/GitHub'
import ReviewCarousel from '../components/ReviewCarousel'
import ITServicesLanding from '../components/ITServicesLanding'
import FreelancerManagement from '../components/FreelancerManagement'
import FastestHiringAndPayments from '../components/FastestHiringAndPayments'
const Home = () => {
  return (
    <div>
      <NavBar/>
      <GitHub/>
      <Agile/>
      <FreelancerManagement/>
      <FastestHiringAndPayments/>
      <FreelancerManagement/>
      <ITServicesLanding/>
      <ReviewCarousel/>
      <FreelancerManagement/>
    </div>
  )
}

export default Home
