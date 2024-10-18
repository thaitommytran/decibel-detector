import React from 'react'

const DecibelStats = () => {
  return (
    <div className="flex justify-center space-x-8">
      <div className="text-center">
        {/* Average decibel reading */}
        <p className="text-sm text-cyan-300">Average</p>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
          101 dB
        </p>
      </div>
      <div className="text-center">
        {/* Max decibel reading */}
        <p className="text-sm text-cyan-300">Max</p>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
          102 dB
        </p>
      </div>
    </div>
  )
}

export default DecibelStats