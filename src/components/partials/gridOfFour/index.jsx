import React from "react"
import PropTypes from "prop-types"
import "./style.css"
import "./style.media.css"

function GridOfFour({ children }) {
  const grid = children.map((el) => (
    <div className="gridOfFour__card" key={children.indexOf(el)}>
      {el}
    </div>
  ))

  return <div className="gridOfFour">{grid}</div>
}

export default GridOfFour
GridOfFour.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}
