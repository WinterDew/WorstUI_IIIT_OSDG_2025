import React, { useState, useEffect } from "react";

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
    for (let i = 0; i < upCount; i++) newChar += randomChoice(zalgoUp);

    const midCount = Math.floor(Math.random() * 3);
    for (let i = 0; i < midCount; i++) newChar += randomChoice(zalgoMid);

    const downCount = 2 + Math.floor(Math.random() * (intensity - 1));
    for (let i = 0; i < downCount; i++) newChar += randomChoice(zalgoDown);

    return newChar;
  }).join("");
}

const fonts = [
  "'Creepster', cursive",
  "'Courier New', Courier, monospace",
  "'Lucida Console', monospace",
  "'UnifrakturCook', serif",
];

const bgColors = [
  "#FF0000", "#00FF00", "#0000FF",
  "#FFFF00", "#FF00FF", "#00FFFF",
];

const textColors = [
  "#000000", "#FFFFFF", "#FFD700",
  "#00FFFF", "#FF4500", "#7FFF00",
];

const sizes = [
  { width: 80, height: 40 },
  { width: 100, height: 50 },
  { width: 120, height: 60 },
  { width: 90, height: 45 },
];

function CalcButtons({ onClick, x, y, label, isFake = false }) {
  const font = randomChoice(fonts);
  const bgColor = randomChoice(bgColors);
  const textColor = randomChoice(textColors);
  const size = randomChoice(sizes);

  const zalgoLabel = balancedZalgo(label, 5);

  const [showMessage, setShowMessage] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    let messageTimer;
    let imageTimer;
    let imageHideTimer;

    if (showMessage) {
      imageTimer = setTimeout(() => {
        setShowImage(true);
      }, 1000); 

      messageTimer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      imageHideTimer = setTimeout(() => {
        setShowImage(false);
      }, 4000);
    }

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(imageTimer);
      clearTimeout(imageHideTimer);
    };
  }, [showMessage]);

  const handleClick = () => {
    if (isFake) {
      setShowMessage(true);
    } else {
      onClick?.();
    }
  };

  const buttonStyle = {
    left: x,
    top: y,
    width: size.width,
    height: size.height,
    fontFamily: font,
    backgroundColor: bgColor,
    color: textColor,
    fontWeight: "bold",
    borderRadius: 8,
    border: "2px solid black",
    boxShadow: "3px 3px 0 black",
    cursor: "pointer",
    userSelect: "none",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "saturate(150%) contrast(150%)",
    transition: "transform 0.1s",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    zIndex: 1,
  };

  const realButtonProps = {
    onClick: handleClick,
    onMouseDown: e => (e.currentTarget.style.transform = "scale(0.95)"),
    onMouseUp: e => (e.currentTarget.style.transform = "scale(1)"),
    onMouseLeave: e => (e.currentTarget.style.transform = "scale(1)"),
  };

  return (
    <>
      <button type="button" style={buttonStyle} {...realButtonProps}>
        {zalgoLabel}
      </button>

      {showMessage && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "64px",
          fontWeight: "bold",
          color: "black",
          zIndex: 9999,
          fontFamily: "'Impact', sans-serif",
          pointerEvents: "none",
        }}>
          L skill issue :3
        </div>
      )}

      {showImage && (
        <img
          src="/src/assets/megamind.png"
          alt="Megamind"
          style={{
            position: "fixed",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "auto",
            zIndex: 9998,
            pointerEvents: "none",
          }}
        />
      )}
    </>
  );
}

export default CalcButtons;
