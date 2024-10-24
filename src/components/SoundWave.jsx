import React from "react";

const SoundWave = () => {
  return (
    <div className="flex items-center justify-between min-h-20 h-40 w-full bg-gray-900 border-purple-500 border rounded-md overflow-hidden">
      {[...Array(80)].map((_, index) => {
        const height = Math.random() * (90 - 10) + 10;

        return (
          <div key={index} className="flex flex-col justify-center h-full">
            {/* Top half of soundwave */}
            <div
              className="w-1 bg-gradient-to-t from-pink-500 to-purple-400 rounded-sm transition-all duration-75 ease-in-out"
              style={{ height: `${height / 2}%` }}
            ></div>
            {/* Bottom half of soundwave */}
            <div
              className="w-1 bg-gradient-to-t from-purple-400 to-pink-500 rounded-sm transition-all duration-75 ease-in-out"
              style={{ height: `${height / 2}%` }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default SoundWave;
