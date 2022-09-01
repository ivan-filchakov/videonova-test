import React from "react"
import PropTypes from "prop-types"
import headingHighlight from "./headingHighlight"
import "./style.css"

function Heading({ h, children, color, accent, accentColor, loading }) {
  const headingClass = `heading heading_h${h}`
  const TagH = `h${h}`

  const highlighted = accent && typeof children === "string"
  const content = highlighted
    ? headingHighlight(children, accent, accentColor)
    : children

  return (
    <TagH className={headingClass} style={{ color }}>
      {loading && <>&nbsp;</>}
      {!loading && content}
    </TagH>
  )
}

export default Heading
Heading.propTypes = {
  /**
   * Sets heading weight from 1 to 3. Generates suitable <h...> tag
   */
  h: PropTypes.oneOf([1, 2, 3]).isRequired,
  /**
   * Heading content
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Heading text color
   */
  color: PropTypes.string,
  /**
   * Index of the word to be highlighted (starts from the 1)
   * * works only when heading children has a {string} type
   */
  accent: PropTypes.number,
  /**
   * Accented word color
   */
  accentColor: PropTypes.string,
  /**
   * Creates empty string while content is loading
   */
  loading: PropTypes.bool,
}
Heading.defaultProps = {
  children: undefined,
  color: "#000000",
  accent: undefined,
  accentColor: "#FF6363",
  loading: false,
}
