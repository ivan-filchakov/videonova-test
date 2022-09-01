import React from "react"
import PropTypes from "prop-types"
import { Button, Heading, Icon } from "../../primitives"
import GridOfFour from "../gridOfFour"
import VideoCard from "../videoCard"
import "./style.css"
import "./style.media.css"

function VideosList({ video, userName, heading, buttonLabel }) {
  function renderVideosList(arr) {
    if (arr.length > 0) {
      return arr.map((el) => (
        <VideoCard
          src={el.url}
          description={el.description}
          heading={el.title}
          key={el.id}
        />
      ))
    }
    return null
  }

  const listHeading = `${userName}${heading}`

  return (
    <div className="videosList">
      <div className="videosList__heading">
        <Heading h={2}>
          {listHeading}&nbsp;
          <Icon color="#000" size="20px" name="CustomVideoFill" />
        </Heading>
      </div>
      <div className="videosList__controls">
        <Button label={buttonLabel} variant="main" />
      </div>
      <div className="videosList__content">
        <GridOfFour>{renderVideosList(video)}</GridOfFour>
      </div>
    </div>
  )
}

export default VideosList
VideosList.propTypes = {
  video: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  userName: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
}
