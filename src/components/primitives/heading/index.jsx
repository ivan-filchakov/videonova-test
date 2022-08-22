import React from "react"
import PropTypes from "prop-types"
import headingHighlight from "./headingHighlight"

// function HeadingHighlight({ children }) {
//   return (
//     <span style={{color:"red"}}> {children} </span>
//   )
// }

function Heading({ h, children, accent }) {
  const headingClass = `heading heading_h${h}`
  const TagH = `h${h}`

  const highlight = (accent && typeof children === "string")
  const content = highlight ? headingHighlight(children, accent) : children

  return (
    <TagH className={headingClass}>
      {content}
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
  ]).isRequired,
  /**
   * Index of the word to be highlighted (starts from the 1)
   * * works only when heading children has a {string} type
   */
  accent: PropTypes.number,
}
Heading.defaultProps = {
  accent: undefined
}
