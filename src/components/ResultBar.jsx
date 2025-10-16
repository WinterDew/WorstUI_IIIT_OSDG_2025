import React from "react";

const zalgoUp = [
  "\u030d", "\u030e", "\u0304", "\u0305", "\u033f", "\u0311",
  "\u0306", "\u0310", "\u0352", "\u0357", "\u0351", "\u0307",
  "\u0308", "\u030a", "\u0342", "\u0343", "\u0344"
];

const zalgoMid = [
  "\u0315", "\u031b", "\u0340", "\u0341", "\u0358", "\u0321",
  "\u0322", "\u0327", "\u0328", "\u0334", "\u0335"
];

const zalgoDown = [
  "\u0316", "\u0317", "\u0318", "\u0319", "\u031c", "\u031d",
  "\u031e", "\u031f", "\u0320", "\u0324", "\u0325", "\u0326",
  "\u0329", "\u032a", "\u032b"
];

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function balancedZalgo(text, intensity = 4) {
  return text.split("").map(char => {
    if (char === " ") return char;
    let newChar = char;

    const upCount = 2 + Math.floor(Math.random() * (intensity - 1));
    for (let i = 0; i < upCount; i++) {
      newChar += randomChoice(zalgoUp);
    }

    const midCount = Math.floor(Math.random() * 3);
    for (let i = 0; i < midCount; i++) {
      newChar += randomChoice(zalgoMid);
    }
    
    const downCount = 2 + Math.floor(Math.random() * (intensity - 1));
    for (let i = 0; i < downCount; i++) {
      newChar += randomChoice(zalgoDown);
    }

    return newChar;
  }).join("");
}

function ResultBar({ x, y, value }) {
  const zalgoText = balancedZalgo(value, 5);

  return (
    <div
      className="absolute bg-gray-200 text-right px-4 py-2 rounded shadow-inner border border-gray-400 w-64"
      style={{
        left: x,
        top: y,
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "20px",
        userSelect: "none",
        lineHeight: "1.2",
      }}
    >
      {zalgoText}
    </div>
  );
}

export default ResultBar;
