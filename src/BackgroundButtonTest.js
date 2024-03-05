import React from "react";
// import "./styles.css";

function BackgroundButtonTest() {
  const changeBackgroundColor = () => {
    document.documentElement.style.setProperty("--background-color", "green");
  };

  return (
    <button onClick={changeBackgroundColor}>Change Background Color</button>
  );
}

export default BackgroundButtonTest;
