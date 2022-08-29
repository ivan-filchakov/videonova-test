import React from "react"
import "./style.css"

function Loader() {
  const style = {
    border: "10px solid rgba(91, 77, 255, 1)",
    borderLeftColor: " rgba(255, 255, 255, 0)",
  }
  return <div className="loader" style={style} />
}

export default Loader
