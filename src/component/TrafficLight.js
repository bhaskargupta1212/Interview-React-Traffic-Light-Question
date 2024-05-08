import React, { useState, useEffect } from "react";

export const TrafficLight = ({ intervalTime }) => {
  const colors = ["red", "orange", "green"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, intervalTime * 1000); // Convert seconds to milliseconds

    return () => clearInterval(interval);
  }, [intervalTime, colors.length]);

  return (
    <div className="traffic-light">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`light ${color} ${index === colorIndex ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};
