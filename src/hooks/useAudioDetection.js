import { useState, useEffect, useCallback } from "react";
import calculateDecibels from "../utils/calculateDecibels";

export default function useAudioDetection() {
  const [decibelHistory, setDecibelHistory] = useState([]);
  const [currentDecibel, setCurrentDecibel] = useState(0);
  const [averageDecibel, setAverageDecibel] = useState(0);
  const [maxDecibel, setMaxDecibel] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const [analyzer, setAnalyzer] = useState(null);

  // Function to start recording
  const startRecording = useCallback(async () => {
    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const context = new AudioContext();
      const analyzerNode = context.createAnalyser();
      const microphone = context.createMediaElementSource(stream);

      // Connect microphone to analyzer
      analyzerNode.fftSize = 2048;
      microphone.connect(analyzerNode);

      // Toggle audio states
      setMediaStream(stream);
      setAudioContext(context);
      setAnalyzer(analyzerNode);
      setIsRecording(true);

      // Reset Stats
      setDecibelHistory([]);
      setMaxDecibel(0);
      setAverageDecibel(0);
      setCurrentDecibel(0);
    } catch (error) {
      console.log("Error accessing microphone:", error);
    }
  }, []);

  // Function to stop recording
  const stopRecording = useCallback(() => {
    if (mediaStream) mediaStream.getTracks().forEach((track) => track.stop());
    if (audioContext) audioContext.close();

    // Reset audio states
    setMediaStream(null);
    setAudioContext(null);
    setAnalyzer(null);
    setIsRecording(false);
  }, [mediaStream, audioContext]);

  // Audio analysis effect
  useEffect(() => {
    if (!analyzer || !isRecording) return;

    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let animationFrame;

    // Audio analysis loop
    const analyze = () => {
      analyzer.getByteFrequencyData(dataArray);
      const dB = Math.round(calculateDecibels(dataArray));
      setCurrentDecibel(dB);
      setDecibelHistory((prev) => [...prev, dB]);
      setMaxDecibel((prev) => Math.max(prev, dB));
      animationFrame = requestAnimationFrame(analyze);
    };

    analyze();
    return () => cancelAnimationFrame(animationFrame);
  }, [analyzer, isRecording]);

  // Average decibel calculation effect
  useEffect(() => {
    if (decibelHistory.length > 0) {
      const average = Math.round(
        decibelHistory.reduce((a, b) => a + b) / decibelHistory.length
      );
      setAverageDecibel(average);
    }
  }, [decibelHistory]);

  // Function to toggle recording state
  const toggleRecording = () => {
    isRecording ? stopRecording() : startRecording();
  };

  return {
    currentDecibel,
    averageDecibel,
    maxDecibel,
    isRecording,
    toggleRecording,
  };
}
