import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:leasing@apartmentsatl.com" className="text-primary hover:text-primary-dark">leasing@apartmentsatl.com</a></p>
            <p>Phone: <a href="tel:4045550123" className="text-primary hover:text-primary-dark">(404) 555-0123</a></p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/properties" className="text-text hover:text-primary transition-colors">Available Properties</Link></li>
              <li><Link to="/apartment-finder" className="text-text hover:text-primary transition-colors">Apartment Finder</Link></li>
              <li><a href="https://apartmentsatl.appfolio.com/connect/users/sign_in" className="text-text hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Resident Portal</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Our Locations</h3>
            <ul className="space-y-2">
              <li><Link to="/midtown" className="text-text hover:text-primary transition-colors">Midtown Atlanta</Link></li>
              <li><Link to="/virginia-highlands" className="text-text hover:text-primary transition-colors">Virginia-Highland</Link></li>
              <li><Link to="/dallas" className="text-text hover:text-primary transition-colors">Dallas, Texas</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-200">
          <p>&copy; {new Date().getFullYear()} ApartmentsATL. Family-owned and operated for over 20 years.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
