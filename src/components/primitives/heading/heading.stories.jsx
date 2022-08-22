/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Heading from "./index"
import Icon from "../icon"

export default {
  title: "primitives/Heading",
  component: Heading,
  argTypes: {
    h: {
      options: [1, 2, 3],
      control: { type: "radio" },
    }
  },
}

export function PrimaryHeading(args) {
  return <Heading {...args} />
}
PrimaryHeading.args = {
  h: 1,
  children: "This is heading",
}

export function WithAccent(args) {
  return <Heading {...args} />
}
WithAccent.args = {
  h: 1,
  children: "This is heading with an accent",
  accent: 4,
}

export function WithNodesInside(args) {
  const h = args.h || 1
  return(
    <Heading h={h}>
      Heading {h}
      <Icon
        color="#FFA959"
        size="24px"
        name="CustomRating"
      />
    </Heading>
  )
}
