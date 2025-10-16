import React, { useState, useEffect } from "react";
import CalcButtons from "./CalcButtons";
import ResultBar from "./ResultBar";

function Calculator() {
  const [expression, setExpression] = useState("0");
  const [positions, setPositions] = useState({});

  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"];
  const fakeButtons = ["6'", "9'", "4'", "2'", "0'"]; 

  const randomPos = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 120;
    return {
      x: Math.floor(Math.random() * maxX) + "px",
      y: Math.floor(Math.random() * maxY) + "px",
    };
  };

  const shufflePositions = () => {
    const newPositions = {};
    newPositions["result"] = randomPos();

    buttons.forEach((btn) => {
      newPositions[btn] = randomPos();
    });

    fakeButtons.forEach((fake) => {
      newPositions[fake] = randomPos();
    });

    setPositions(newPositions);
  };

  useEffect(() => {
    shufflePositions(); 
  }, []);

  const handleClick = (label) => {
    if (label === "C") {
      setExpression("0");
    } else if (label === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch {
        setExpression("Error");
      }
    } else {
      setExpression((prev) => (prev === "0" ? label : prev + label));
    }

    shufflePositions();
  };

  return (
    <div className="relative w-screen h-screen bg-gray-100 overflow-hidden">
      {positions["result"] && (
        <ResultBar
          x={positions["result"].x}
          y={positions["result"].y}
          value={expression}
        />
      )}

      {buttons.map((btn) => (
        <CalcButtons
          key={btn}
          label={btn}
          x={positions[btn]?.x}
          y={positions[btn]?.y}
          onClick={() => handleClick(btn)}
        />
      ))}

      {fakeButtons.map((key) => (
        <CalcButtons
          key={`fake-${key}`}
          label={key}
          x={positions[key]?.x}
          y={positions[key]?.y}
          isFake={true}
        />
      ))}
    </div>
  );
}

export default Calculator;
