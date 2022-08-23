/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import UserCard from "./index"

export default {
  title: "partials/UserCard",
  component: UserCard,
  argTypes: {
    // type: { control: "radio", options: ["text", "password", "textarea"] },
  },
}

function Template(args) {
  return (
    <div style={{ height: "450px", border: "1px dashed black" }}>
      <UserCard {...args} />
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {
  image: "https://picsum.photos/100/200/",
  name: "Some Name",
  videosCount: 66,
  videosLabel: "videos",
  likesCount: 165,
  likesLabel: "likes",
  buttonLabel: "To profile",
  buttonClick: "http://google.com",
}
