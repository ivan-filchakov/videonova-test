import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./style.css"

function Loader({ color, size, percents, textColor, textSize }) {
  const spinnerStyle = {
    borderWidth: "10px",
    borderStyle: "solid",
    borderColor: `${color} ${color} ${color} rgba(0, 0, 0, 0)`,
    width: size,
    height: size,
  }
  const percentStyle = {
    color: textColor,
    top: "10px",
    left: "10px",
    width: size,
    height: size,
    fontSize: textSize,
  }

  const [counter, setCounter] = useState(13)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 91) clearInterval(interval)
        return prev + 6
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loader">
      <div className="loader__spinner" style={spinnerStyle} />
      {percents && (
        <span className="loader__percents" style={percentStyle}>
          {counter}%
        </span>
      )}
    </div>
  )
}

export default Loader
Loader.propTypes = {
  /**
   * Loader color
   */
  color: PropTypes.string,
  /**
   * Loader size
   */
  size: PropTypes.string,
  percents: PropTypes.bool,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
}
Loader.defaultProps = {
  color: "#5B4DFF",
  size: "56px",
  percents: false,
  textColor: "#5B4DFF",
  textSize: "16px",
}
