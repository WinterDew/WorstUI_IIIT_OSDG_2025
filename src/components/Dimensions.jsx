import React, { useState, useEffect } from "react";



function Dimensions() {
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

  return (
    <div className="relative w-screen h-screen bg-gray-100 font-sans overflow-hidden">
      {/* Horizontal line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black -translate-y-1/2">
        {/* Left arrowhead */}
        <div className="absolute -left-[10px] top-1/2 -translate-y-1/2 
          border-t-[6px] border-b-[6px] border-r-[10px] border-transparent border-r-black" />
        {/* Right arrowhead */}
        <div className="absolute -right-[10px] top-1/2 -translate-y-1/2
          border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-black" />
      </div>

      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black -translate-x-1/2">
        {/* Top arrowhead */}
        <div className="absolute left-1/2 -top-[10px] -translate-x-1/2
          border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-black" />
        {/* Bottom arrowhead */}
        <div className="absolute left-1/2 -bottom-[10px] -translate-x-1/2
          border-l-[6px] border-r-[6px] border-t-[10px] border-transparent border-t-black" />
      </div>

      {/* Size label at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-6 text-lg font-semibold text-gray-800 bg-white px-3 py-1 rounded shadow">
        {size.width}px × {size.height}px
      </div>
    </div>
  );
}

export default Dimensions;
