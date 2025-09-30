import React from "react";

function ResultBar({ x, y, value }) {
  return (
    <div
      className="absolute bg-gray-200 text-right font-mono text-xl px-4 py-2 rounded shadow-inner border border-gray-400 w-64"
      style={{ left: x, top: y }}
    >
      {value}
    </div>
  );
}

export default ResultBar;
