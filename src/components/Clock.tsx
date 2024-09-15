import React, { useEffect, useState } from "react";

export default function Clock({ timerMode, activeTimer, selectedColor }) {
  const durations = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  const [timeLeft, setTimeLeft] = useState(durations[timerMode]);

  useEffect(() => {
    setTimeLeft(durations[timerMode]); // Reset the timer whenever the mode changes
  }, [timerMode]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown); // Clear interval when component unmounts
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="relative flex items-center mt-[50px] justify-center">
      {/* Outer Shadow Circle */}
      <div className="w-[410px] h-[410px] bg-[#1F2047] rounded-full absolute shadow-[0px_0px_60px_25px_rgba(0,0,0,0.5)]" />

      {/* Circular Progress */}
      <div className="w-[360px] h-[360px] bg-[#161932] rounded-full flex items-center justify-center relative">
        <div
          className="absolute w-full h-full rounded-full"
          style={{
            background: `conic-gradient(${
              activeTimer === "pomodoro" ? selectedColor : "#F87070"
            } ${(100 * timeLeft) / durations[timerMode]}%, transparent 50%)`,
          }}
        />

        {/* Inner Circle */}
        <div className="w-[339px] h-[339px] bg-[#161932] rounded-full flex flex-col items-center justify-center z-10">
          <h1 className="text-[100px] text-white">{formatTime(timeLeft)}</h1>
          <p className="text-white tracking-[5px]">
            {timeLeft === 0 ? "PAUSED" : "RUNNING"}
          </p>
        </div>
      </div>
    </div>
  );
}
