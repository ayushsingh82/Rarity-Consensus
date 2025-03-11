import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 animate-pulse">
          Flare Consensus NFT Platform
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Rarity Scoring Card */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-pink-500/20 hover:border-pink-500/50 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 text-pink-400">
                Consensus-Driven Rarity Scoring
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-300">
                <li className="hover:text-pink-200 transition-colors">Multi-model consensus for accurate rarity analysis</li>
                <li className="hover:text-pink-200 transition-colors">Decentralized validation across Flare nodes</li>
                <li className="hover:text-pink-200 transition-colors">Cross-chain NFT metadata aggregation and verification</li>
              </ul>
              <Link 
                to="/rarity" 
                className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-lg
                          hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300
                          shadow-lg hover:shadow-pink-500/25"
              >
                Check Consensus Score →
              </Link>
            </div>
          </div>

          {/* Fraud Detection Card */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-pink-500/20 hover:border-pink-500/50 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 text-pink-400">
                Consensus-Based Fraud Prevention
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-300">
                <li className="hover:text-pink-200 transition-colors">Distributed consensus for fraud detection</li>
                <li className="hover:text-pink-200 transition-colors">Multi-chain validation through Flare's State Connector</li>
                <li className="hover:text-pink-200 transition-colors">Decentralized attestation of NFT authenticity</li>
              </ul>
              <Link 
                to="/fraud-detection" 
                className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-lg
                          hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300
                          shadow-lg hover:shadow-pink-500/25"
              >
                Verify Consensus →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home