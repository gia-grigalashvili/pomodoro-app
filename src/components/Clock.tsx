import React from "react";

export default function Clock() {
  return (
    <div className="relative flex items-center mt-[50px] justify-center">
      {/* Outer Shadow Circle */}
      <div className="w-[450px] h-[450px] bg-[#1F2047] rounded-full absolute shadow-[0px_0px_60px_25px_rgba(0,0,0,0.5)]" />

      {/* Circular Progress */}
      <div className="w-[410px] h-[410px] bg-[#161932] rounded-full flex items-center justify-center relative">
        <div
          className="absolute w-full h-full rounded-full"
          style={{
            background: "conic-gradient(#F87070 25%, transparent 100%)",
          }}
        />

        {/* Inner Circle */}
        <div className="w-[339px] h-[339px] bg-[#161932] rounded-full flex flex-col items-center justify-center z-10">
          <h1 className="text-[70px] text-white">17:59</h1>
          <p className="text-white tracking-[5px]">PAUSE</p>
        </div>
      </div>
    </div>
  );
}
