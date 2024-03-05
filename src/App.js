import logo from "./logo.svg";
import "./styles.css";
import { useState } from "react";
import Remote from "./Remote";
import { Sketch } from "@uiw/react-color";
import BackgroundButtonTest from "./BackgroundButtonTest";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="app">
      {/* <BackgroundButtonTest></BackgroundButtonTest> */}
      {/* Apply the class here */}
      <Remote color={color}/>
      {/* <Sketch color="#002dff" /> */}
    </div>
  );
}

export default App;
