import React from "react";

function CalcButtons({onClick, x, y, label}) {
  return (
    <button
      onClick={onClick}
      className="absolute px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow-md hover:bg-blue-700 active:scale-95 transition"
      style={{ left: x, top: y }}
    >
      {label}
    </button>
  );
}

export default CalcButtons;
