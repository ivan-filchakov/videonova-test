import React from "react"
import PropTypes from "prop-types"
import "./style.css"
import AdaptiveLink from "../adaptiveLink"
import ButtonLoader from "./buttonLoader"

function Button({ label, onClick, variant, disabled, loading }) {
  const getStyles = () => {
    const styles = ["button"]
    styles.push(`button_${variant}`)
    if (disabled) styles.push("button_disabled")
    if (loading) styles.push("button_loading")
    return styles.join(" ")
  }

  const enableClick = disabled ? undefined : onClick
  const showLoadingIcon = loading && ["main", "transparent"].includes(variant)

  return (
    <AdaptiveLink className={getStyles()} action={enableClick}>
      <div className="button__label">
        {label}
        {showLoadingIcon && (
          <ButtonLoader variant={variant} disabled={disabled} />
        )}
      </div>
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
