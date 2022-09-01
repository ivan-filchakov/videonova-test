/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Button from "./index"

export default {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["main", "transparent", "link"],
      control: { type: "radio" },
    },
  },
}

export function MainButton(args) {
  return <Button {...args} />
}
MainButton.args = {
  label: "Start Now",
  onClick: "http://google.com",
  variant: "main",
}

export function TransparentButton(args) {
  return <Button {...args} />
}
TransparentButton.args = {
  label: "Start Now",
  onClick: "http://google.com",
  variant: "transparent",
}

export function LinkButton(args) {
  return (
    <>
      Lorem ipsum <Button {...args} />
    </>
  )
}
LinkButton.args = {
  label: "Sign Up",
  onClick: "http://google.com",
  variant: "link",
}

export function Disabled(args) {
  return <Button {...args} />
}
Disabled.args = {
  label: "Disabled",
  onClick: "http://google.com",
  variant: "main",
  disabled: true,
}

export function Loading(args) {
  return <Button {...args} />
}
Loading.args = {
  label: "Loading",
  variant: "main",
  onClick: "http://google.com",
  loading: true,
}
