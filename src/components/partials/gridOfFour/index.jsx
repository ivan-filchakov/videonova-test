import React from "react"
import PropTypes from "prop-types"
import UserCard from "../userCard"
import "./style.css"

function GridOfFour({ elements }) {

  const grid = elements.map(el => (
    <div className="gridOfFour__card" key={el.name}>
      <UserCard
        key={el.name}
        image={el.image}
        name={el.name}
        videosCount={el.videosCount}
        videosLabel={el.videosLabel}
        likesCount={el.likesCount}
        likesLabel={el.likesLabel}
        buttonLabel={el.buttonLabel}
        buttonClick={el.buttonClick}
      />
    </div>
  ))

  return (
    <div className="gridOfFour">
      {grid}
    </div>
  )
}

export default GridOfFour
GridOfFour.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
}
