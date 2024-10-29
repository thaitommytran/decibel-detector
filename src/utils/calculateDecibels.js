export default function calculateDecibels(dataArray) {
  // Calculate the root mean square (rms)
  const rms = Math.sqrt(
    dataArray.reduce((sum, val) => sum + val * val, 0) / dataArray.length
  );

  // Convert to decibels (dB)
  const dB = 20 * Math.log10(rms / 128); // Adjust for typical audio levels
  return Math.max(0, Math.min(120, dB + 80)); // Clamp between 0 and 120 dB
}
