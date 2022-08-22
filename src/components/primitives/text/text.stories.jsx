/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Text from "./index"
import Icon from "../icon"

export default {
  title: "primitives/Text",
  component: Text,
}

export function DefaultText(args) {
  return (
    <Text {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
      blanditiis, illo, ipsam magnam nemo, nobis obcaecati officiis ratione
      similique sint soluta suscipit? Corporis culpa fuga iure, minus
      perferendis possimus quibusdam quisquam reiciendis sed soluta, voluptate
      voluptatibus! Autem impedit incidunt maxime minima perspiciatis placeat
      quaerat saepe totam ullam, vel voluptate voluptatem!
    </Text>
  )
}
DefaultText.args = {
  color: "#5B5B5B",
  size: "16px",
}

export function WithNodesInside(args) {
  return (
    <Text {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <Icon color="#FFA959" size="18px" name="CustomDiscord" />
      <Icon color="#FFA959" size="18px" name="CustomTelegram" />
      <Icon color="#FFA959" size="18px" name="CustomTwitter" />
    </Text>
  )
}
WithNodesInside.args = {
  color: "#5B5B5B",
  size: "16px",
}
