import CircularGauge from "./components/CircularGauge";
import DecibelStats from "./components/DecibelStats";
import RecordButton from "./components/RecordButton";
import SoundWave from "./components/SoundWave";
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 p-6 overflow-hidden items-center">
      {/* Solid background color */}
      <div className="absolute inset-0 bg-[#282a36] opacity-90" />
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-cyan-900/30" />
      <BackgroundParticles />
      {/* Card container */}
      <div className="relative z-10 flex flex-col justify-center h-auto rounded-lg border bg-blue-800/15 border-purple-500 py-8 px-4 min-h-full w-full max-w-[640px]">
        {/* App header and title */}
        <header className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Decibel Detector
          </h1>
        </header>
        <div className="flex flex-col items-center justify-around h-full p-2 gap-4">
          <CircularGauge />
          <DecibelStats />
          <SoundWave />
          <RecordButton />
        </div>
      </div>
    </div>
  );
}

export default App;
