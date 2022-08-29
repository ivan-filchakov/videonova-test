import React from "react"
import PropTypes from "prop-types"
import "./style.css"
import "./style.media.css"

function GridOfFour({ children }) {
  if (!children.length)
    return (
      <div className="gridOfFour">
        <div className="gridOfFour__card">{children}</div>
      </div>
    )

  if (typeof children === "object") {
    const grid = children.map((el) => (
      <div className="gridOfFour__card" key={children.indexOf(el)}>
        {el}
      </div>
    ))

    return <div className="gridOfFour">{grid}</div>
  }
  return (
    <div className="gridOfFour">
      <div className="gridOfFour__card">{children}</div>
    </div>
  )
}

export default GridOfFour
GridOfFour.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}
