/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import AdaptiveLink from "./index"
import Image from "../image"

export default {
  title: "Primitives/AdaptiveLink",
  component: AdaptiveLink,
  argTypes: {
    label: "Button",
    action: "",
  },
}

export function Exterrnal(args) {
  return <AdaptiveLink {...args}>External link</AdaptiveLink>
}
Exterrnal.args = {
  action: "http://google.com",
}

export function Stretch(args) {
  return (
    <div style={{ position: "relative", width: "100px" }}>
      <AdaptiveLink {...args} />
      <Image src="https://picsum.photos/100/100/" fit="cover" />
    </div>
  )
}

Stretch.args = {
  action: () => alert("click"), // eslint-disable-line
  stretch: "stretch",
}
