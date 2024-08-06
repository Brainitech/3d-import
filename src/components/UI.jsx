import React from "react"
import { PlayuseDoors } from "./events"

const UI = () => {
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
  const butStyle = {
    display: "flex",
    flexdirection: "coloumn",
    margin: "5px",
    justifycontent: "center",
  }
  const { animations, animationIndex, setAnimationIndex } = PlayuseDoors()

  return (
    <>
      <div style={divStyle}>
        {animations.map((animation, index) => (
          <button style={butStyle} key={animation} variant={index === animationIndex ? "filled" : "light"} onClick={() => setAnimationIndex(index)}>
            {animation}
          </button>
        ))}
      </div>
      <div style={divStyle2}>
        <button style={butStyle} onClick={() => setAnimationIndex(0)}>
          Close All
        </button>
        <button style={butStyle} onClick={() => setAnimationIndex(5)}>
          Hackathon
        </button>
        <button style={butStyle} onClick={() => setAnimationIndex(4)}>
          Quiz
        </button>
        <button style={butStyle} onClick={() => setAnimationIndex(3)}>
          Speaker Session
        </button>
        <button style={butStyle} onClick={() => setAnimationIndex(2)}>
          Treasure Hunt
        </button>
        <button style={butStyle} onClick={() => setAnimationIndex(1)}>
          Business Analytics
        </button>
      </div>
    </>
  )
}

export default UI
