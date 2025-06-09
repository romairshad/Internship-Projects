import { assets } from '../assets/img/assets.js'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const images = [
  `${assets.background_img_1}`,
  `${assets.background_img_2}`,
  `${assets.background_img_3}`,
  `${assets.background_img_4}`,
  
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000)
    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div style={{position: 'relative', height: '400px', width: '100%', maxWidth: '800px', margin: 'auto'}}>
      <div
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          width: '100%',
          height: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transition: 'background-image 0.5s ease-in-out'
        }}
      ></div>
      {/* Left Arrow */}
      <div style={{position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', cursor: 'pointer'}}>
        <ChevronLeft
          onClick={prevSlide}
          size={30}
          style={{color: 'white'}}
          aria-label="Previous slide"
        />
      </div>
      {/* Right Arrow */}
      <div style={{position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', cursor: 'pointer'}}>
        <ChevronRight
          onClick={nextSlide}
          size={30}
          style={{color: 'white'}}
          aria-label="Next slide"
        />
      </div>
      {/* Pagination Dots */}
      <div style={{position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex'}}>
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentIndex === slideIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              margin: '0 4px'
            }}
            aria-label={`Go to slide ${slideIndex + 1}`}
            role="button"
            tabIndex={0}
          ></div>
        ))}
      </div>
    </div>
  )
}