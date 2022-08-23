/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react"
import InputText from "./index"

export default {
  title: "primitives/InputText",
  component: InputText,
  argTypes: {
    type: { control: "radio", options: ["text", "password", "textarea"] },
  },
}

function Template(args) {
  return (
    <div style={{ height: "300px" }}>
      <InputText {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: "New label",
  type: "text",
  placeholder: "new placeholder",
}

export const Password = Template.bind({})
Password.args = {
  label: "Password",
  type: "password",
  placeholder: "psswrd placeholder",
}

export const Area = Template.bind({})
Area.args = {
  label: "Text Area",
  type: "textarea",
  placeholder: "type smth",
}

export const WithPopUp = Template.bind({})
WithPopUp.args = {
  label: "With pop-up",
  type: "text",
  value: "some value",
  popUp: {
    label: "Need help?",
    onClick: "http://google.com",
  },
}

export function StoreValueOnChange(args) {
  const [state, setState] = useState("empty")
  const getChange = (el) => {
    setState(el)
  }
  return (
    <div style={{ height: "300px" }}>
      <InputText {...args} onChange={getChange} />
      <code>input type: {state.type}</code>
      <br />
      <code>input recieved: {state.value}</code>
    </div>
  )
}
StoreValueOnChange.args = {
  label: "Get Val",
  type: "text",
  placeholder: "val here pls",
}
