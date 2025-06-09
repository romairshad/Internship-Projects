import React, { useContext, useState, useEffect } from 'react'
import FeatureCards from '../components/FeatureCards'
import  {ShopContext}  from '../context/ShopContext'
import Title  from '../components/Title'


const WhyChooseUs = () => {
    const   {features} = useContext(ShopContext)
    const [featureList,  setFeatureList] = useState([])

    useEffect(()=>{
        setFeatureList(features.slice(0,3))
    },[]);




  return (
    <section className="bg-black text-white mb-40 px-16 py-16">
      <div className="container mx-auto px-4">
     <Title text1="Why Choose Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((features, index) => (
            <FeatureCards key={index} title={features.title} description={features.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs