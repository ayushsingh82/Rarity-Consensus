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
     Rarity-Consensus
        </Link>
        <div className="space-x-6">
       
        </div>
      </div>
    </nav>
  )
}

export default Navbar
