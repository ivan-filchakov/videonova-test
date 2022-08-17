import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import isInternalLink from "./isInternalLink"

function AdaptiveLink({ children, action, ...props }) {
  if (!action) {
    return <span {...props}>{children}</span>
  }

  if (typeof action === "function") {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <span role="button" tabIndex="0" onClick={action} {...props}>
        {children}
      </span>
    )
  }

  if (isInternalLink(action) && typeof action === "string") {
    return (
      <Link to={action} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={action}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      tabIndex="0"
      {...props}
    >
      {children}
    </a>
  )
}

export default AdaptiveLink
AdaptiveLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}
AdaptiveLink.defaultProps = {
  children: undefined,
  action: undefined,
}
