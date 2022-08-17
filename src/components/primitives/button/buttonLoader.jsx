import React from "react"
import PropTypes from "prop-types"

function ButtonLoader({ variant, disabled }) {
  const loaderStyle = (el) => {
    if (el === "main") {
      return {
        border: "3px solid rgba(255, 255, 255, 1)",
        borderLeftColor: " rgba(255, 255, 255, 0)",
      }
    }

    if (el === "transparent" && !disabled) {
      return {
        border: "3px solid rgba(91, 77, 255, 1)",
        borderLeftColor: " rgba(91, 77, 255, 0)",
      }
    }

    if (el === "transparent" && disabled) {
      return {
        border: "3px solid rgba(91, 77, 255, .4)",
        borderLeftColor: " rgba(91, 77, 255, 0)",
      }
    }
    return null
  }

  return (
    <div className="button__loader" style={loaderStyle(variant, disabled)} />
  )
}

export default ButtonLoader
ButtonLoader.propTypes = {
  variant: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}
