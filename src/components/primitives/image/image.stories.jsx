/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Image from "./index"

export default {
  title: "primitives/Image",
  component: Image,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    fit: { control: "radio", options: ["cover", "contain", "center"] },
  },
}

function Template(args) {
  return (
    <div>
      <div
        style={{ width: "135px", height: "180px", border: "1px solid black" }}
      >
        <Image {...args} />
      </div>
      <div
        style={{
          width: "240px",
          height: "150px",
          border: "1px solid black",
          marginTop: "10px",
        }}
      >
        <Image {...args} />
      </div>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  src: "https://placehold.jp/100x100.png",
  alt: "img",
}

export const Cover = Template.bind({})
Cover.args = {
  ...Primary.args,
  fit: "cover",
}

export const Contain = Template.bind({})
Contain.args = {
  ...Primary.args,
  fit: "contain",
}

export const Center = Template.bind({})
Center.args = {
  ...Primary.args,
  fit: "center",
}
