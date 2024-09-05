import { useState } from "react";
import setings from "/public/icon-settings.svg";
import clothe from "/public/icon-close.svg";
import tichka from "/public/Path 2 - Copy.png";
import arrowdown from "/public/icon-arrow-down.svg";
import arrowup from "/public/icon-arrow-up.svg";

export default function Setings({ selectedColor, setSelectedColor }) {
  const [show, setShow] = useState(false);
  const [tempColor, setTempColor] = useState(selectedColor); // Temporary state for the selected color

  const colors = [
    { id: 1, value: "#F87070" },
    { id: 2, value: "#70F3F8" },
    { id: 3, value: "#D881F8" },
  ];

  const toggleShow = () => {
    setShow(!show);
    setTempColor(selectedColor);
  };

  const selectColor = (color) => {
    setTempColor(color);
  };

  const applyChanges = () => {
    setSelectedColor(tempColor);
    setShow(false);
  };

  return (
    <div className="flex flex-col items-center mt-[40px]">
      <img
        className="w-[27px] h-[28px] cursor-pointer"
        src={setings}
        alt="Settings"
        onClick={toggleShow}
      />

      {show && (
        <div
          className="fixed flex-col inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleShow}
        >
          <div
            className="bg-white w-[327px] rounded-[20px] h-[80%] p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-[25px]">Settings</h2>
              <button className="text-[25px]" onClick={toggleShow}>
                <img src={clothe} alt="Close" />
              </button>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1>TIME (MINUTES)</h1>
              <div className="flex justify-between items-center">
                <h1>pomodor</h1>
                <p>25</p>
                <div className="flex flex-col gap-[5px]">
                  <img className="w-[15px] h-[7px]" src={arrowup} alt="" />
                  <img className="w-[15px] h-[7px]" src={arrowdown} alt="" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1>short break</h1>
                <p>5</p>
                <div className="flex flex-col gap-[5px]">
                  <img className="w-[15px] h-[7px]" src={arrowup} alt="" />
                  <img className="w-[15px] h-[7px]" src={arrowdown} alt="" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1>long break</h1>
                <p>15</p>
                <div className="flex flex-col gap-[5px]">
                  <img className="w-[15px] h-[7px]" src={arrowup} alt="" />
                  <img className="w-[15px] h-[7px]" src={arrowdown} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center">
              <div className="flex items-center gap-[10px] flex-col justify-between">
                <p>color</p>
                <div className="flex gap-[5px]">
                  {colors.map((color) => (
                    <div
                      key={color.id}
                      className="h-[40px] w-[40px] rounded-[50%] flex justify-center cursor-pointer"
                      style={{ backgroundColor: color.value }}
                      onClick={() => selectColor(color.value)}
                    >
                      {tempColor === color.value && (
                        <img
                          src={tichka}
                          alt="Tichka"
                          className="inset-0 mt-[10px] w-[15px] h-[15px]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={applyChanges}
            className="bg-[#F87070] mt-[-30px] w-[140px] h-[50px] rounded-[20px]"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}
