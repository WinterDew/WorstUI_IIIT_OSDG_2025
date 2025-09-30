import React from "react";
import Dimensions from "./components/Dimensions";
import { useState, useEffect } from "react";
import Calculator from "./components/Calculator";

var h_preset = 600;
var w_preset = 1200;

function App() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if(Math.abs(size.width - w_preset) >= 5 || Math.abs(size.height - h_preset) >= 5) 
  return (
    <div className="h-screen w-screen">
        <Dimensions />
    </div>
  );
  else 
  return (
    <div className="h-screen w-screen">
      <Calculator />
    </div>
  );
}

export default App;
