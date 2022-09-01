import React from "react"
import PropTypes from "prop-types"
import { Button, Heading, Image } from "../../primitives"
import UserCardCounter from "./userCardCounter"
import "./style.css"
import "./style.media.css"

function UserCard({
  image,
  name,
  videosCount,
  videosLabel,
  likesCount,
  likesLabel,
  buttonLabel,
  buttonClick,
}) {
  return (
    <div className="userCard">
      <div className="userCard__pic">
        <Image src={image} alt={name} fit="cover" />
      </div>
      <div className="userCard__name">
        <Heading h={3}>{name}</Heading>
      </div>
      <div className="userCard__counters">
        <UserCardCounter
          icon="CustomVideoOutline"
          count={videosCount}
          label={videosLabel}
        />
        <UserCardCounter
          icon="CustomHeart"
          count={likesCount}
          label={likesLabel}
        />
      </div>
      <div className="userCard__button">
        <Button variant="main" label={buttonLabel} onClick={buttonClick} />
      </div>
    </div>
  )
}

export default UserCard
UserCard.propTypes = {
  /**
   * Link on image source
   */
  image: PropTypes.string.isRequired,
  /**
   * User name
   */
  name: PropTypes.string.isRequired,
  /**
   * Counter value
   */
  videosCount: PropTypes.number.isRequired,
  /**
   * Counter label
   */
  videosLabel: PropTypes.string.isRequired,
  /**
   * Counter value
   */
  likesCount: PropTypes.number.isRequired,
  /**
   * Counter label
   */
  likesLabel: PropTypes.string.isRequired,
  /**
   * Button label
   */
  buttonLabel: PropTypes.string.isRequired,
  /**
   * Button onClick function or link
   */
  buttonClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}
UserCard.defaultProps = {
  buttonClick: undefined,
}
