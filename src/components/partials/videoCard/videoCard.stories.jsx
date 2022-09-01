/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import VideoCard from "./index"

export default {
  title: "partials/VideoCard",
  component: VideoCard,
  argTypes: {},
}

function Template(args) {
  return (
    <div
      style={{
        maxWidth: "360px",
        padding: "20px",
        border: "1px dashed #ccc",
      }}
    >
      <VideoCard {...args} />
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {
  // proceeds all variations of youtube links:
  // src: "https://youtu.be/jfKfPfyJRdk",
  // src: "https://youtube.com/embed/jfKfPfyJRdk",
  src: "https://www.youtube.com/watch?v=Y3PtV9H9eK4&ab_channel=TopMovieClips",
  heading: "video heading",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et!",
}
