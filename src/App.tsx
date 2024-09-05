import { useState } from "react";
import Header from "./components/Header";
import Clock from "./components/Clock";
import Setings from "./components/Setings";

function App() {
  const [selectedColor, setSelectedColor] = useState("#F87070"); // Default color

  return (
    <>
      <Header selectedColor={selectedColor} />
      <Clock />
      <Setings
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </>
  );
}

export default App;
