import React from "react"
import PropTypes from "prop-types"
import VideoCard from "../videoCard"
import { Icon, Loader } from "../../primitives"

function VideoLoader({ src, loadingLabel, successLabel, success }) {
  const label = success ? successLabel : loadingLabel
  return (
    <div className="videoLoader">
      {!success && (
        <div className="videoLoader__icon">
          <Loader size="56px" color="#fff" textColor="#fff" percents />
        </div>
      )}
      {success && (
        <div className="videoLoader__icon">
          <Icon color="#fff" size="56px" name="CustomCheck" />
        </div>
      )}
      <VideoCard src={src} heading={label} onlyPreview />
    </div>
  )
}

export default VideoLoader
VideoLoader.propTypes = {
  src: PropTypes.string.isRequired,
  loadingLabel: PropTypes.string.isRequired,
  successLabel: PropTypes.string.isRequired,
  success: PropTypes.bool,
}
VideoLoader.defaultProps = {
  success: false,
}
