import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ExclusiveOffer from '../components/ExclusiveOffer'
import ClientFeedback from '../components/ClientFeedback'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <BestSeller/>
      <LatestCollection/>
      <ExclusiveOffer/>
      <OurPolicy/>
      <ClientFeedback/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
