import React, { useEffect, useState, useContext } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { ShopContext } from '../context/ShopContext'


const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const {testimonials}  = useContext(ShopContext)
  const [testimonialList,  setTestimonialList] = useState([])

  useEffect(()=>{
    setTestimonialList(testimonials.slice(0,3))
  },[]);



  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="relative max-w-3xl mx-auto">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-gray-500">XK</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-600">{testimonials[currentIndex].companyName}</h3>
            </div>
            <p className="text-gray-600">{testimonials[currentIndex].content}</p>
          </div>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {testimonialList.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel