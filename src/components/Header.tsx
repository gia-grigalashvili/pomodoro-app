import { useState } from "react";

export default function Header({ selectedColor }) {
  const [activeTimer, setActiveTimer] = useState("pomodoro");

  const handleClick = (timer) => {
    setActiveTimer(timer);
  };

  return (
    <div className="flex flex-col text-center gap-[20px]">
      <h1 className="text-[24px] text-white">pomodoro</h1>
      <div className="p-[12px] bg-[#161932] h-[60px] flex gap-[15px] rounded-[30px]">
        <h1
          onClick={() => handleClick("pomodoro")}
          style={{
            backgroundColor:
              activeTimer === "pomodoro" ? selectedColor : "transparent",
          }}
          className="p-[10px] text-[12px] h-[40px] rounded-[30px] cursor-pointer"
        >
          pomodoro
        </h1>
        <h1
          onClick={() => handleClick("shortBreak")}
          style={{
            backgroundColor:
              activeTimer === "shortBreak" ? selectedColor : "transparent",
          }}
          className="text-[12px] p-[10px] h-[40px] rounded-[30px] cursor-pointer"
        >
          short break
        </h1>
        <h1
          onClick={() => handleClick("longBreak")}
          style={{
            backgroundColor:
              activeTimer === "longBreak" ? selectedColor : "transparent",
          }}
          className="p-[10px] text-[12px] h-[40px] rounded-[30px] cursor-pointer"
        >
          long break
        </h1>
      </div>
    </div>
  );
}
