/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import AdaptiveLink from "./index"

export default {
  title: "Primitives/AdaptiveLink",
  component: AdaptiveLink,
  argTypes: {
    label: "Button",
    action: "",
  },
}

export function Internal(args) {
  return <AdaptiveLink {...args}>Internal link</AdaptiveLink>
}
Internal.args = {
  action: "/qweqweqwe",
}

export function Exterrnal(args) {
  return <AdaptiveLink {...args}>External link</AdaptiveLink>
}
Exterrnal.args = {
  action: "http://google.com",
}

export function Function(args) {
  return <AdaptiveLink {...args}>Function</AdaptiveLink>
}
Function.args = {
  action: () => alert("function!"), // eslint-disable-line
}

export function ChildLink(args) {
  return <AdaptiveLink {...args}>Child link</AdaptiveLink>
}
ChildLink.args = {
  action: "http://google.com",
}

export function PropLink(args) {
  return <AdaptiveLink {...args} />
}
PropLink.args = {
  children: "props link",
  action: "http://google.com",
}

export function NoChild(args) {
  return (
    <div>
      <AdaptiveLink {...args} />
      no child
    </div>
  )
}
NoChild.args = {
  action: "http://google.com",
}
