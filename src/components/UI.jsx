import React from "react"
import { PlayuseDoors } from "./events"

const UI = ({ setAnimationIndex }) => {
  const divStyle = {
    display: "none",
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    padding: "10px",
    backgroundColor: "lightgray", // Optional styling
  }
  const divStyle2 = {
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    padding: "10px",
    backgroundColor: "lightgray", // Optional styling
  }
  const divStyle3 = {
    position: "absolute",
    top: "1%",
    right: "50",
    transform: "translateY(-50%)",
    padding: "10px",
    backgroundColor: "lightgray", // Optional styling
  }
  const butStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "5px",
    justifyContent: "center",
  }
  const { animations, animationIndex, setAnimationIndex: setLocalAnimationIndex } = PlayuseDoors()

  const handleButtonClick = (index) => {
    setAnimationIndex(index)
    setLocalAnimationIndex(index)
  }

  return (
    <>
      <div style={divStyle}>
        {animations.map((animation, index) => (
          <button style={butStyle} key={animation} variant={index === animationIndex ? "filled" : "light"} onClick={() => handleButtonClick(index)}>
            {animation}
          </button>
        ))}
      </div>
      <div style={divStyle2}>
        <button style={butStyle} onClick={() => handleButtonClick(0)}>
          Close All
        </button>
        <button style={butStyle} onClick={() => handleButtonClick(5)}>
          Hackathon
        </button>
        <button style={butStyle} onClick={() => handleButtonClick(4)}>
          Quiz
        </button>
        <button style={butStyle} onClick={() => handleButtonClick(3)}>
          Speaker Session
        </button>
        <button style={butStyle} onClick={() => handleButtonClick(2)}>
          Treasure Hunt
        </button>
        <button style={butStyle} onClick={() => handleButtonClick(1)}>
          Business Analytics
        </button>
      </div>
<div style={divStyle3}>Wait for the model to load</div>
    </>
  )
}

export default UI
