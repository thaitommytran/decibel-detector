import React, { useState } from "react";
import micOn from "../assets/micOn.png";
import micOff from "../assets/micOff.png";

const RecordButton = () => {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <button
      className={`w-20 h-20 rounded-full p-3 ${
        isRecording
          ? "bg-red-500 hover:bg-red-600" // Red when active to trigger stop
          : "bg-green-500 hover:bg-green-600" // Green when inactive to trigger start
      } transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center`}
      onClick={toggleRecording}
    >
      {isRecording ? (
        <img
          className="filter brightness-0 invert"
          src={micOff}
          alt="mic off"
        />
      ) : (
        <img className="filter brightness-0 invert" src={micOn} alt="mic on" />
      )}
    </button>
  );
};

export default RecordButton;
