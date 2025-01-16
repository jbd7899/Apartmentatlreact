import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const LocationCard = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="block no-underline">
      <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <img 
          src={image || "/api/placeholder/400/300"} 
          alt={title}
          className="w-full aspect-video object-cover rounded-lg mb-4"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2 text-text">{title}</h3>
          <p className="text-text-light mb-4">{description}</p>
          <span className="text-primary font-medium">
            View Details →
          </span>
        </div>
      </article>
    </Link>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-text-light">{description}</p>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Hero 
        title="Unique and architecturally charming urban living"
        backgroundImage="https://i.imgur.com/toEfT5z.jpg"
      />
      
      {/* Locations Section */}
      <section className="py-24 px-8 bg-highlight">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LocationCard
              title="Midtown Atlanta"
              description="Walk to parks, restaurants, and cultural attractions from our carefully preserved historic properties."
              link="/midtown"
              image="https://i.imgur.com/THKfFjB.png"
            />
            <LocationCard
              title="Virginia-Highland"
              description="Experience the charm of Atlanta's most walkable neighborhood in our character-rich homes."
              link="/virginia-highlands"
              image="https://i.imgur.com/xHkf2HL.jpg"
            />
            <LocationCard
              title="Dallas, Texas"
              description="Explore our growing collection of distinctive properties in Dallas's most desirable areas."
              link="/dallas"
              image="https://i.imgur.com/dMU0oEE.jpg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8 bg-gray-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Properties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Historic Character"
              description="Preserved architectural details, high ceilings, and unique features that tell a story."
            />
            <FeatureCard
              title="Personal Service"
              description="Family-owned for over 20 years, providing attentive management and quick responses."
            />
            <FeatureCard
              title="Modern Amenities"
              description="Updated interiors with modern conveniences and online resident services."
            />
            <FeatureCard
              title="Prime Locations"
              description="Walkable neighborhoods close to dining, shopping, and entertainment."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Find Your New Home?</h2>
          <Link 
            to="/apartment-finder" 
            className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-highlight transition-colors duration-300"
          >
            Start Your Search
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
