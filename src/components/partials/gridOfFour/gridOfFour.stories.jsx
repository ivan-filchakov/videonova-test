/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import GridOfFour from "./index"
import { Text } from "../../primitives"

export default {
  title: "partials/GridOfFour",
  component: GridOfFour,
  argTypes: {},
}

function Template(args) {
  return (
    <div style={{ height: "450px", border: "1px dashed black" }}>
      <GridOfFour {...args}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum
          esse laudantium odio recusandae repellat sed soluta veniam! Alias aut
          deserunt hic ipsa modi nam omnis quidem quis saepe voluptas.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum
          esse laudantium odio recusandae repellat sed soluta veniam! Alias aut
          deserunt hic ipsa modi nam omnis quidem quis saepe voluptas.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum
          esse laudantium odio recusandae repellat sed soluta veniam! Alias aut
          deserunt hic ipsa modi nam omnis quidem quis saepe voluptas.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum
          esse laudantium odio recusandae repellat sed soluta veniam! Alias aut
          deserunt hic ipsa modi nam omnis quidem quis saepe voluptas.
        </Text>
      </GridOfFour>
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {}

export function NoChildren(args) {
  return <GridOfFour />
}
NoChildren.args = {}
