import React from "react"
import { AdaptiveLink, Icon } from "../../primitives"
import HeaderControls from "./headerControls"
import "./style.css"

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <AdaptiveLink action="/" stretch />
        <Icon name="CustomLogo" size="32px" color="#5B4DFF" />
      </div>
      <div className="header__content">
        <HeaderControls />
      </div>
    </div>
  )
}

export default Header
