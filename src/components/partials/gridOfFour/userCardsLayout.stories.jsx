/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import GridOfFour from "./index"

export default {
  title: "partials/GridOfFour",
  component: GridOfFour,
  argTypes: {
    // type: { control: "radio", options: ["text", "password", "textarea"] },
  },
}

function Template(args) {
  return (
    <div style={{ height: "450px", border: "1px dashed black" }}>
      <GridOfFour {...args} />
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {
  elements: [
    {
      image: "https://picsum.photos/100/200/",
      name: "First Name",
      videosCount: 112266,
      videosLabel: "videos",
      likesCount: 161235,
      likesLabel: "likes",
      buttonLabel: "To profile",
      buttonClick: "http://google.com",
    },
    {
      image: "https://picsum.photos/200/200/",
      name: "Super Long Name Example",
      videosCount: 66,
      videosLabel: "videos",
      likesCount: 165,
      likesLabel: "likes",
      buttonLabel: "To profile",
      buttonClick: "http://google.com",
    },
    {
      image: "https://picsum.photos/200/100/",
      name: "Third Name",
      videosCount: 66,
      videosLabel: "videos",
      likesCount: 165,
      likesLabel: "likes",
      buttonLabel: "To profile",
      buttonClick: "http://google.com",
    },
    {
      image: "https://picsum.photos/100/100/",
      name: "Fourth Name",
      videosCount: 66,
      videosLabel: "videos",
      likesCount: 16895,
      likesLabel: "likes",
      buttonLabel: "To profile",
      buttonClick: "http://google.com",
    },
  ],
}
