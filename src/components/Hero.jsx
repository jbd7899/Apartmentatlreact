import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ title, subtitle, backgroundImage, showButtons = true }) => {
  return (
    <section className="relative text-white text-center py-32 min-h-[80vh] flex flex-col items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${backgroundImage || '/api/placeholder/1920/1080'})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative z-10 px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8">
            {subtitle}
          </p>
        )}
        {showButtons && (
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/apartment-finder" className="px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors duration-300">
              Apartment Finder
            </Link>
            <Link to="/properties" className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-primary transition-colors duration-300">
              View Properties
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
