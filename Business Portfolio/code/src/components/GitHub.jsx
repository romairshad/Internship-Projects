import React from 'react'

const GitHub = () => {
  return (
    <div>
      <footer className="w-full bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                GitHub
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GitHub
