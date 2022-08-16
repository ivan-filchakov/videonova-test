/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Button from "./index"

export default {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    label: "Button",
    onClick: "",
  },
}

export function ButtonPrimary(args) {
  return <Button {...args} />
}
ButtonPrimary.args = {
  label: "button label",
  onClick: "test",
}
