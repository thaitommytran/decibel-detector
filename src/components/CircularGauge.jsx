import React from "react";

const CircularGauge = () => {
  return (
    <div className="relative w-auto h-auto">
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <defs>
          {/* Blurred glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Color gradient for active circle */}
          <linearGradient
            id="draculaGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ff79c6" />
            <stop offset="50%" stopColor="#bd93f9" />
            <stop offset="100%" stopColor="#8be9fd" />
          </linearGradient>
        </defs>
        {/* Inactive circle state */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#44475a"
          strokeWidth="8"
        />
        {/* Active circle state */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="url(#draculaGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          filter="url(#glow)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        {/* Current decibel reading */}
        <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
          100
        </span>
        <span className="text-xl text-cyan-300">dB</span>
      </div>
    </div>
  );
};

export default CircularGauge;
