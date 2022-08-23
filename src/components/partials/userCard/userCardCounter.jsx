import React from "react"
import PropTypes from "prop-types"
import { Icon, Text } from "../../primitives"

function UserCardCounter({ icon, count, label }) {
  return (
    <div className="userCardCounter">
      <div className="userCardCounter__icon">
        <Icon color="#000000" size="20px" name={icon} />
      </div>
      <div className="userCardCounter__label">
        <Text>{[count, label].join(" ")}</Text>
      </div>
    </div>
  )
}
export default UserCardCounter
UserCardCounter.propTypes = {
  /**
   * Key name for icon render
   */
  icon: PropTypes.string.isRequired,
  /**
   * Counter value
   */
  count: PropTypes.number.isRequired,
  /**
   * Counter label
   */
  label: PropTypes.string.isRequired,
}
