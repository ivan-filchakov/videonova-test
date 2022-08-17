import React from "react"
import PropTypes from "prop-types"
import "./style.css"
import AdaptiveLink from "../adaptiveLink"
import ButtonLoader from "./buttonLoader"

function Button({ label, onClick, variant, disabled, loading }) {
  const enableClick = disabled ? undefined : onClick
  const showLoader = loading && ["main", "transparent"].includes(variant)

  const getStyles = () => {
    const styles = ["button"]
    styles.push(`button_${variant}`)
    if (disabled) styles.push("button_disabled")
    if (showLoader) styles.push("button_loading")
    return styles.join(" ")
  }

  return (
    <AdaptiveLink className={getStyles()} action={enableClick}>
      <div className="button__label">{label}</div>
      {showLoader && <ButtonLoader variant={variant} disabled={disabled} />}
    </AdaptiveLink>
  )
}

export default Button
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  variant: PropTypes.oneOf(["main", "transparent", "link"]).isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
}
Button.defaultProps = {
  onClick: undefined,
  disabled: false,
  loading: false,
}
