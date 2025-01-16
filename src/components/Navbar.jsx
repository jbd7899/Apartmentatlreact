import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-8 h-20 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="text-primary text-2xl font-bold no-underline">
          ApartmentsATL
        </Link>
      </div>
      
      <button 
        className="md:hidden p-2 hover:bg-gray-100 rounded"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>
      
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="https://apartmentsatl.appfolio.com/connect/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors duration-300"
          >
            Resident Portal
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
