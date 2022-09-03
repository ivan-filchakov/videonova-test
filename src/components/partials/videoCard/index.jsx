import React, { useState } from "react"
import PropTypes from "prop-types"
import YouTube from "react-youtube"
import { Heading, Icon, Image, Text } from "../../primitives"
import "./style.css"

function VideoCard({ src, heading, description }) {
  /**
   * Proceeds all variations of youtube video links possible
   * Extracts video id for embed link generating
   * @param link {string}
   * @return {string}
   */
  const getEmbedId = (link) => {
    const id = link.split("/").at(-1)
    const vParam = id.indexOf("v=")
    const start = vParam < 0 ? 0 : vParam + 2
    const end = id.length
    return id.slice(start, end)
  }
  const embedId = getEmbedId(src)
  const videoOpts = { playerVars: { autoplay: 1 } }
  /**
   * Creates thumbnail based on youtube video id
   */
  const [state, setState] = useState({
    preview: true,
    video: false,
  })
  /**
   * Embeds youtube player only after first click on thumbnail
   */
  const showVideo = () =>
    setState({
      preview: false,
      video: true,
    })
  /**
   * Removes youtube player on the end
   * @param event
   */
  const removeVideo = (event) => {
    if (event.data === 0)
      setState({
        preview: true,
        video: false,
      })
  }

  return (
    <div className="videoCard">
      <div className="videoCard__video">
        {state.preview && (
          <>
            <div
              className="videoCard__cover"
              onClick={showVideo}
              onKeyPress={showVideo}
              role="button"
              tabIndex={0}
            >
              <Icon color="#fff" size="36px" name="CustomPlayVideo" />
            </div>
            <Image
              src={`https://img.youtube.com/vi/${embedId}/mqdefault.jpg`}
              fit="cover"
            />
          </>
        )}
        {state.video && (
          <YouTube
            videoId={embedId}
            opts={videoOpts}
            onStateChange={removeVideo}
          />
        )}
      </div>
      <div className="videoCard__heading">
        <Heading h={3}>{heading}</Heading>
      </div>
      <div className="videoCard__description">
        <Text>{description}</Text>
      </div>
    </div>
  )
}

export default VideoCard
VideoCard.propTypes = {
  /**
   * Dynamic data determined by global state or parent component
   */
  src: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
