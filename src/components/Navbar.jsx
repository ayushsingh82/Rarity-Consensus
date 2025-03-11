import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-bold hover:scale-105 transition-transform duration-300 flex items-center"
        >
          <span className="text-2xl mr-2">⚡</span>
          Flare NFT Consensus
        </Link>
        <div className="space-x-6">
          <Link 
            to="/rarity" 
            className="hover:text-pink-200 transition-colors duration-300 relative group"
          >
            <span>Consensus Scoring</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-200 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/fraud-detection" 
            className="hover:text-pink-200 transition-colors duration-300 relative group"
          >
            <span>Consensus Validation</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-200 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
