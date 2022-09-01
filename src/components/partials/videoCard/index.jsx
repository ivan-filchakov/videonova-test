import React, {useState} from "react"
import "./style.css"
import { Heading, Icon, Image, Text } from "../../primitives"
import YouTube from "react-youtube"

function VideoCard({ src, heading, description }) {
  const getEmbedId = (link) => {
    const id = link.split("/").at(-1)
    const start = id.indexOf("=") + 1
    const end = id.indexOf("&") > 0 ? id.indexOf("&") : id.length
    return id.slice(start, end)
  }
  const embedId = getEmbedId(src)

  const [state, setState] = useState({
    preview: true,
    video: false,
  })

  const onPlay = () => setState({
    preview: false,
    video: true,
  })
  
  const onStateChange = (event) => {
    if (event.data === 0) setState({
      preview: true,
      video: false,
    })
  }

  const videoOpts = { playerVars: { autoplay: 1 } }

  return (
    <div className="videoCard">
      <div className="videoCard__video">
        {state.preview && (
          <>
            <div className="videoCard__cover" onClick={onPlay}>
              <Icon color="#fff" size="36px" name="CustomPlayVideo" />
            </div>
            <Image src={`https://img.youtube.com/vi/${embedId}/0.jpg`} fit="cover" />
          </>
        )}
        {state.video && (
          <YouTube
            videoId={embedId}
            opts={videoOpts}
            onStateChange={onStateChange}
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
