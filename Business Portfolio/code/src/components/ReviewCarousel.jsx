import React, { useState, useContext, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Title from  './Title'
import { ShopContext } from '../context/ShopContext'

export default function ReviewCarousel() {
    const {reviews} =  useContext(ShopContext);
    const  [reviewList,  setReviewList] = useState([]);
    useEffect(()=>{
        setReviewList(reviews);
    })





  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Title text1={"Don't just take our word for it.."}/>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviewList.map((reviews) => (
              <div key={reviews.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className={`${reviews.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">REVIEW</h3>
                  <div className="flex items-center mb-4">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt={reviews.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold">{reviews.name}</p>
                      <p className="text-sm text-gray-600">{reviews.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{reviews.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Next review"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}