/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import FormSign from "./index"

export default {
  title: "partials/FormSign",
  component: FormSign,
  argTypes: {},
}

function Template(args) {
  return (
    <div style={{ height: "950px" }}>
      <FormSign {...args} />
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {}
