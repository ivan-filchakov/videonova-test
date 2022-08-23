import React from "react"
import PropTypes from "prop-types"

function Text({ children, color, size }) {
  return (
    <span style={{ color, fontSize: size }} className="text">
      {children}
    </span>
  )
}

export default Text
Text.propTypes = {
  /**
   * Content to put inside block. Can be string or other react node (Icon e.g.)
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * Text color value
   */
  color: PropTypes.string,
  /**
   * Text size value
   */
  size: PropTypes.string,
}
Text.defaultProps = {
  color: "#5B5B5B",
  size: "16px",
}
