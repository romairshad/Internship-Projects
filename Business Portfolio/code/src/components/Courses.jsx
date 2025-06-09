import React, {useContext, useState, useEffect} from 'react'
import Service_course from './Service_course'
import { ShopContext } from '../context/ShopContext'
const Courses = () => {

    const {course} =  useContext(ShopContext);
    const [courseList, setCourseList] = useState([]);

    useEffect(()=>{
        setCourseList(course)
    },[]);


  return (
    <div className='m-10 mx-16 mb-28 px-20'>
        <div className='grid  md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 grid-cols-1 gap-10'>
            {courseList.map((item,index)=>(
                <Service_course key={index} {...item} />
            ))

            }

            
        </div>
      
    </div>
  )
}

export default Courses
