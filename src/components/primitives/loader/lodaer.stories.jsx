/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Loader from "./index"

export default {
  title: "primitives/Loader",
  component: Loader,
  argTypes: {
    color: { control: "color" },
    size: {},
  },
}

function Template(args) {
  return <Loader {...args} />
}
export const Default = Template.bind({})
Default.args = {
  percents: true,
}
