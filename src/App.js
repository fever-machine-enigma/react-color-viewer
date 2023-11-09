import "./App.css";
import { ColorBox } from "./components/ColorBox";
import { ColorContainer } from "./components/ColorContainer";
import { useState } from "react";

function App() {
  const [newColor, setNewColor] = useState("");

  return (
    <div className="App">
      <ColorContainer newColor={newColor} />
      <ColorBox newColor={newColor} setNewColor={setNewColor} />
    </div>
  );
}

export default App;
