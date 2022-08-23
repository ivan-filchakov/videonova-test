/* eslint-disable react/jsx-props-no-spreading */
import React, {useState} from "react"
import InputText from "./index"

export default {
  title: "primitives/InputText",
  component: InputText,
}

export function DefaultInputText(args) {
  return (
    <div style={{ height: "300px" }}>
      <InputText {...args} />
    </div>
  )
}
DefaultInputText.args = {
  label: "New label",
  type: "text",
  placeholder: "new placeholder"
}

export function Password(args) {
  return (
    <div style={{ height: "300px" }}>
      <InputText {...args} />
    </div>
  )
}
Password.args = {
  label: "Password",
  type: "password",
  placeholder: "psswrd placeholder"
}

export function GetValOnChange(args) {
  const [state, setState] = useState("empty")
  const getChange = (el) => {
    setState(el)
  }
  return (
    <div style={{ height: "300px" }}>
      <InputText {...args} onChange={getChange} />
      <code>input type: {state.type}</code><br/>
      <code>input recieved: {state.value}</code>
    </div>
  )
}
GetValOnChange.args = {
  label: "Get Val",
  type: "text",
  placeholder: "val here pls"
}

export function WithPopUp(args) {
  return (
    <div style={{ height: "300px" }}>
      <InputText {...args} />
    </div>
  )
}
WithPopUp.args = {
  label: "With pop-up",
  type: "text",
  value: "some value",
  popUp: {
    label: "Need help?",
    onClick: "http://google.com"
  }
}
