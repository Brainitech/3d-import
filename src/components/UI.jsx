import React from "react"
import { PlayuseDoors } from "./events"

const UI = () => {
  const divStyle = {
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    padding: "10px",
    backgroundColor: "lightgray", // Optional styling
  }
  const butStyle = {
    display: "flex",
    flexdirection: "coloumn",
    margin: "5px",
    justifycontent: "center",
  }
  const { animations, animationIndex, setAnimationIndex } = PlayuseDoors()

  return (
    <div style={divStyle}>
      {animations.map((animation, index) => (
        <button style={butStyle} key={animation} variant={index === animationIndex ? "filled" : "light"} onClick={() => setAnimationIndex(index)}>
          {animation}
        </button>
      ))}
    </div>
  )
}

export default UI
