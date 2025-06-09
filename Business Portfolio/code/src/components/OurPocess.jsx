import React, {useContext, useState, useEffect} from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import Process from './Process'
const OurPocess = () => {
    const {process} = useContext(ShopContext)
    const [processList, setProcessList] = useState([])
    useEffect(()=>{
        setProcessList(process.slice(0,4))
    },[]);


  return (
    <section className="bg-black text-white mb-40 px-16 py-16">
      <div className="container mx-auto px-4">
     <Title text1="Our Process" />
     <p className='text-center p-6'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processList.map((process, index) => (
            <Process key={index} title={process.title} description={process.description} />
          ))}
        </div>
        <br />
        <div> 
            <button className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm p-2  w-32 h-10 mt-5 absolute right-24'>SEE OUR WORK</button>
        </div>
        <br />
      </div>
    </section>
  )
  
}

export default OurPocess
