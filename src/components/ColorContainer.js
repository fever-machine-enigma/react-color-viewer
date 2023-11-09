import React from "react";
import "../styles/colorContainer.css";

export const ColorContainer = ({ newColor }) => {
  return (
    <div className="_container" style={{ backgroundColor: newColor }}>
      <label className="colorLabel">
        {newColor ? newColor : "Enter a CSS Color"}
      </label>
    </div>
  );
};
