import React from "react"
// import { useSelector } from "react-redux"
import { useSiteInfo } from "../../../store/selectors"
import { AdaptiveLink, Icon, Text } from "../../primitives"
import "./style.css"
import "./style.media.css"

function Footer() {
  const { copyright, socials } = useSiteInfo().footerInfo
  const CopytightInfo = (
    <Text>
      {copyright} {new Date().getFullYear()}
    </Text>
  )
  const SocialIcons = socials.map((el) => (
    <div className="footerSocials__icon" key={el.link}>
      <AdaptiveLink action={el.link} stretch />
      <Icon color="#fff" size="32px" name={el.iconName} />
    </div>
  ))
  return (
    <div className="footer">
      <div className="footer__logo">
        <AdaptiveLink action="/" stretch />
        <Icon color="#ffffff" size="32px" name="CustomLogo" />
      </div>
      <div className="footer__copyright">{CopytightInfo}</div>
      <div className="footer__socials">
        <div className="footerSocials">{SocialIcons}</div>
      </div>
    </div>
  )
}

export default Footer
