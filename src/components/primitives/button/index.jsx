import React from "react"
import PropTypes from "prop-types"
import "./style.css"
import AdaptiveLink from "../adaptiveLink"
import ButtonLoader from "./buttonLoader"

function Button({ label, onClick, variant, disabled, loading, linkColor }) {
  const enableClick = disabled ? undefined : onClick
  const showLoader = loading && ["main", "transparent"].includes(variant)
  const customLinkColor = {
    color: variant === "link" && linkColor ? linkColor : "",
  }

  const getStyles = () => {
    const styles = ["button"]
    styles.push(`button_${variant}`)
    if (disabled) styles.push("button_disabled")
    if (showLoader) styles.push("button_loading")
    return styles.join(" ")
  }

  return (
    <AdaptiveLink className={getStyles()} action={enableClick}>
      <span className="button__label" style={customLinkColor}>
        {label}
      </span>
      {showLoader && <ButtonLoader variant={variant} disabled={disabled} />}
    </AdaptiveLink>
  )
}

export default Button
Button.propTypes = {
  /**
   * Button label
   */
  label: PropTypes.string.isRequired,
  /**
   * Action when button is beign clicked. Can be function or a link (string)
   */
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Variants of Button appearance
   */
  variant: PropTypes.oneOf(["main", "transparent", "link"]).isRequired,
  /**
   * Disables button onClick interaction
   */
  disabled: PropTypes.bool,
  /**
   * Indicates loading process by showing loader icon
   */
  loading: PropTypes.bool,
  /**
   * Button link text color
   */
  linkColor: PropTypes.string,
}
Button.defaultProps = {
  onClick: undefined,
  disabled: false,
  loading: false,
  linkColor: undefined,
}
