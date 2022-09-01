import React from "react"
import PropTypes from "prop-types"
import "./style.css"

function Loader({ color, size }) {
  const style = {
    borderWidth: "10px",
    borderStyle: "solid",
    borderColor: `${color} ${color} ${color} rgba(0, 0, 0, 0)`,
    width: size,
    height: size,
  }
  return <div className="loader" style={style} />
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
}
Loader.defaultProps = {
  color: "#5B4DFF",
  size: "56px",
}
