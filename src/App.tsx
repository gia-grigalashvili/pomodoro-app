import { useState } from "react";
import Header from "./components/Header";
import Clock from "./components/Clock";
import Settings from "./components/Setings";

function App() {
  const [selectedColor, setSelectedColor] = useState("#F87070"); // Default color
  const [timerMode, setTimerMode] = useState("pomodoro"); // Default timer mode
  const [activeTimer, setActiveTimer] = useState("pomodoro");

  return (
    <>
      <Header
        selectedColor={selectedColor}
        activeTimer={activeTimer}
        setActiveTimer={setActiveTimer}
        onModeChange={setTimerMode} // Pass mode change handler
        activeMode={timerMode} // Pass active mode to highlight
      />
      <Clock
        selectedColor={selectedColor}
        activeTimer={activeTimer}
        timerMode={timerMode}
      />{" "}
      {/* Pass mode to Clock for countdown */}
      <Settings
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </>
  );
}

export default App;
