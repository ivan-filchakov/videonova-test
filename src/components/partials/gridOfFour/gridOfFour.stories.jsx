/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import GridOfFour from "./index"
import Text from "../../primitives/text"

export default {
  title: "partials/GridOfFour",
  component: GridOfFour,
  argTypes: {
    // type: { control: "radio", options: ["text", "password", "textarea"] },
  },
}

function Template(args) {
  return (
    <div style={{ height: "450px", border: "1px dashed black" }}>
      <GridOfFour {...args}>
        <Text>test</Text>
        <Text>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
        </Text>
        <Text>test</Text>
        <Text>test</Text>
      </GridOfFour>
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {}
