/* eslint-disable */
import React from "react"
import Icon from "./index"
import useIconLibraries from "./iconLibraries"

export default {
  title: "primitives/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: { type: "color" },
    },
  },
}

export function CustomIcon(args) {
  return <Icon {...args} />
}
CustomIcon.args = {
  name: "CustomDiscord",
  size: "200",
  color: "#081d53",
}

export function ListOfCustomIcons(args) {
  function showCustomIcons() {
    const library = useIconLibraries()
    const CustomIcons = library.Custom
    const iconRows = []
    for (const el in CustomIcons) {
      const ExapmleIcon = CustomIcons[el]
      iconRows.push(
        <div
          style={{
            flex: "0 0 49%",
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            fontSize: "12px",
          }}
        >
          <div style={{ margin: "0 20px" }} key={args.name}>
            <ExapmleIcon
              key={args.name}
              width={args.size}
              height={args.size}
              fill={args.color} />
          </div>
          <div>
            <code style={{ color: "#666" }}>
              {`<Icon 
                name='${el}' 
                size='${args.size}'
                color='${args.color}'
              />`}
            </code>
          </div>
        </div>
      )
    }
    return iconRows
  }
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>VideoNova custom icons:</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {showCustomIcons()}
      </div>
    </div>
  )
}

ListOfCustomIcons.args = {
  size: "33px",
  color: "#00aaff",
}
