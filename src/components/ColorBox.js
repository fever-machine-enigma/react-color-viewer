import React from "react";
import "../styles/colorBox.css";

export const ColorBox = ({ newColor, setNewColor }) => {
  return (
    <div>
      <input
        autoFocus
        type="text"
        placeholder="ex. Aqua, rgb(0,0,0), #111abc"
        onChange={(e) => setNewColor(e.target.value)}
        required
        value={newColor}
      />
    </div>
  );
};
