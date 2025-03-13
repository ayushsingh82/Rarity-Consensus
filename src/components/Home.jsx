import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [moralisInput, setMoralisInput] = useState({
    address: '',
    chainId: '',
    tokenId: ''
  })
  const [moralisData, setMoralisData] = useState(null)
  const [moralisLoading, setMoralisLoading] = useState(false)
  const [moralisError, setMoralisError] = useState(null)

  const handleMoralisSubmit = async (e) => {
    e.preventDefault()
    setMoralisLoading(true)
    setMoralisError(null)
    setMoralisData(null)

    try {
      // Format chain ID to ensure it starts with '0x'
      const formattedChainId = moralisInput.chainId.startsWith('0x') 
        ? moralisInput.chainId.toLowerCase()
        : `0x${parseInt(moralisInput.chainId).toString(16)}`

      const options = {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjUyZWE4YzY5LTdhNmUtNDgzZC1hYzU0LTQ5NmQyZGM5MmYzNSIsIm9yZ0lkIjoiNDM1ODA5IiwidXNlcklkIjoiNDQ4MzI4IiwidHlwZUlkIjoiOTQ2Y2NhYmItY2ZhMC00MGRjLWJmYTYtNTc0NzRjZjYyNjBkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NDE2OTEyMDgsImV4cCI6NDg5NzQ1MTIwOH0.22iWVeqkaHXHRSrnVrK0WN3NzqxT6jqbCiEQ7S1uF6U'
        }
      }

      // Use the correct API endpoint format
      const metadataUrl = `https://deep-index.moralis.io/api/v2/nft/${moralisInput.address}?chain=${formattedChainId}&format=decimal&token_id=${moralisInput.tokenId}&normalizeMetadata=true&media_items=false`
      console.log('Fetching from:', metadataUrl)

      const response = await fetch(metadataUrl, options)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('API Error Response:', errorText)
        try {
          const errorJson = JSON.parse(errorText)
          throw new Error(errorJson.message || `Failed to fetch NFT data: ${response.statusText}`)
        } catch (e) {
          throw new Error(`Failed to fetch NFT data: ${response.status} ${response.statusText}`)
        }
      }

      const responseData = await response.json()
      console.log('API Response:', responseData)

      // The API returns an array of results, we need the first one
      const data = responseData.result?.[0]
      
      if (!data) {
        throw new Error('NFT not found')
      }

      setMoralisData(data)
      setMoralisError(null)
    } catch (err) {
      console.error('Full error details:', err)
      setMoralisError(err.message || 'An error occurred while fetching NFT data')
    } finally {
      setMoralisLoading(false)
    }
  }

  // Update the results display section to show specific NFT details
  const renderNftDetails = (data) => {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-pink-400 font-semibold">Basic Info</h4>
            <p className="text-gray-300">Name: {data.name}</p>
            <p className="text-gray-300">Symbol: {data.symbol}</p>
            <p className="text-gray-300">Token ID: {data.token_id}</p>
            <p className="text-gray-300">Contract Type: {data.contract_type}</p>
          </div>
          <div>
            <h4 className="text-pink-400 font-semibold">Rarity Info</h4>
            <p className="text-gray-300">Rank: {data.rarity_rank}</p>
            <p className="text-gray-300">Percentage: {data.rarity_percentage}%</p>
            <p className="text-gray-300">Label: {data.rarity_label}</p>
          </div>
        </div>
        
        {data.normalized_metadata?.attributes && (
          <div>
            <h4 className="text-pink-400 font-semibold mt-4">Attributes</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {data.normalized_metadata.attributes.map((attr, index) => (
                <div key={index} className="bg-gray-700/50 p-3 rounded-lg">
                  <p className="text-pink-300 font-medium">{attr.trait_type}</p>
                  <p className="text-gray-300">{attr.value}</p>
                  <p className="text-gray-400 text-sm">{attr.rarity_label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

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

        {/* Moralis NFT Metadata Resync Section */}
        <div className="mt-16 bg-gray-800 p-8 rounded-xl shadow-lg border border-pink-500/20">
          <h2 className="text-3xl font-semibold mb-6 text-pink-400 text-center">
            NFT Metadata Resync
          </h2>
          
          <form onSubmit={handleMoralisSubmit} className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                value={moralisInput.address}
                onChange={(e) => setMoralisInput(prev => ({...prev, address: e.target.value}))}
                placeholder="Contract Address"
                className="px-4 py-3 rounded-lg bg-gray-700 text-white border border-pink-500/20 
                         focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
              />
              <input
                type="text"
                value={moralisInput.chainId}
                onChange={(e) => setMoralisInput(prev => ({...prev, chainId: e.target.value}))}
                placeholder="Chain ID (1 for ETH, 137 for Polygon)"
                className="px-4 py-3 rounded-lg bg-gray-700 text-white border border-pink-500/20 
                         focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
              />
              <input
                type="text"
                value={moralisInput.tokenId}
                onChange={(e) => setMoralisInput(prev => ({...prev, tokenId: e.target.value}))}
                placeholder="Token ID"
                className="px-4 py-3 rounded-lg bg-gray-700 text-white border border-pink-500/20 
                         focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/40"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={moralisLoading || !moralisInput.address || !moralisInput.chainId || !moralisInput.tokenId}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300
                          ${moralisLoading || !moralisInput.address || !moralisInput.chainId || !moralisInput.tokenId
                            ? 'bg-gray-600 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transform hover:scale-105'
                          }`}
              >
                {moralisLoading ? 'Resyncing...' : 'Resync Metadata'}
              </button>
            </div>
          </form>

          {/* Moralis Results Display */}
          {moralisError && (
            <div className="mt-6 p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-300">
              {moralisError}
            </div>
          )}

          {moralisData && (
            <div className="mt-6 p-6 bg-gray-700/50 rounded-lg border border-pink-500/20">
              <h3 className="text-xl font-semibold mb-4 text-pink-300">NFT Details</h3>
              {renderNftDetails(moralisData)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home


// demo address for contract - 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB

// token id 1 , chain id 0x1