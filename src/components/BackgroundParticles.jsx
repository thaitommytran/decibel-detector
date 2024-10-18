import React, { useMemo } from "react";

const BackgroundParticles = () => {
  const particles = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      key: i,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
        animationDuration: `${10 + Math.random() * 20}s`,
        animationDelay: `${Math.random() * 20}s`,
      },
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.key}
          className="absolute rounded-full bg-cyan-300 opacity-30 animate-float"
          style={particle.style}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
