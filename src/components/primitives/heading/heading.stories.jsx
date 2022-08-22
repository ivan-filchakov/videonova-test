/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import Heading from "./index"
import Icon from "../icon"

export default {
  title: "primitives/Heading",
  component: Heading,
  argTypes: {
    h: {
      options: [1, 2, 3],
      control: { type: "radio" },
    },
  },
}

export function JustAHeading(args) {
  return <Heading {...args} />
}
JustAHeading.args = {
  h: 1,
  children: "This is heading",
  color: "#000000",
}

export function WithAccent(args) {
  return <Heading {...args} />
}
WithAccent.args = {
  h: 1,
  children: "This is heading with an accent",
  accent: 4,
  accentColor: "#5B4DFF"
}

export function WithNodesInside({ h }) {
  const weight = h || 1
  return (
    <Heading h={weight}>
      Heading {weight}
      <Icon color="#FFA959" size="36px" name="CustomRating" />
    </Heading>
  )
}
WithNodesInside.propTypes = {
  h: PropTypes.number.isRequired,
}
