import React from "react"
import PropTypes from "prop-types"
import { Button, Heading, Icon, Loader, Text } from "../../primitives"
import GridOfFour from "../gridOfFour"
import VideoCard from "../videoCard"
import "./style.css"
import "./style.media.css"

function VideosList({
  video,
  userName,
  heading,
  buttonLabel,
  isEmpty,
  admin,
  openModalUpload,
}) {
  const isLoaded = video && userName
  const VideosLoader = (
    <div className="videosList__loader">
      <Loader />
    </div>
  )
  const EmptyList = (
    <div className="videosList__empty">
      <Text>{`${userName} ${isEmpty}`}</Text>
    </div>
  )

  function getVideosList(arr) {
    if (arr.length > 0) {
      const list = arr.map((el) => (
        <VideoCard
          src={el.url}
          description={el.description}
          heading={el.title}
          key={el.id}
        />
      ))
      return <GridOfFour>{list}</GridOfFour>
    }
    return EmptyList
  }

  const listHeading = `${userName}${heading}`

  return (
    <div className="videosList">
      {!isLoaded && VideosLoader}
      {isLoaded && (
        <>
          <div className="videosList__heading">
            {isLoaded && (
              <Heading h={2}>
                {listHeading}&nbsp;
                <Icon color="#000" size="20px" name="CustomVideoFill" />
              </Heading>
            )}
          </div>
          <div className="videosList__controls">
            {admin && (
              <Button
                label={buttonLabel}
                variant="main"
                onClick={() => openModalUpload()}
              />
            )}
          </div>
          <div className="videosList__content">
            {isLoaded && getVideosList(video)}
          </div>
        </>
      )}
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
  ),
  userName: PropTypes.string,
  heading: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  isEmpty: PropTypes.string.isRequired,
  admin: PropTypes.bool,
  openModalUpload: PropTypes.func,
}
VideosList.defaultProps = {
  video: undefined,
  userName: undefined,
  admin: false,
  openModalUpload: undefined,
}
