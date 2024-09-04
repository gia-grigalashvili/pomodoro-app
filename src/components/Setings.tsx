import { useState } from "react";
import setings from "/public/icon-settings.svg";

export default function Setings() {
  const [show, setShow] = useState(false); // Initially hide the full-screen overlay

  const toggleShow = () => {
    setShow(!show); // Toggle the overlay visibility
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
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleShow}
        >
          <div
            className="bg-white w-[327px] h-[80%] p-5"
            onClick={(e) => e.stopPropagation()} // Prevent overlay close when clicking inside content
          >
            <h2 className="text-2xl mb-4">Settings</h2>
            <p>This is the full-screen settings panel.</p>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              onClick={toggleShow}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
