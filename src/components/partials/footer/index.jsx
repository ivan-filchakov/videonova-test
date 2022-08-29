import React from "react"
import { AdaptiveLink, Icon, Text } from "../../primitives"
import "./style.css"
import "./style.media.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <AdaptiveLink action="/" stretch />
        <Icon color="#ffffff" size="32px" name="CustomLogo" />
      </div>
      <div className="footer__copyright">
        <Text>All rights reserved {new Date().getFullYear()}</Text>
      </div>
      <div className="footer__socials">
        <div className="footerSocials">
          <div className="footerSocials__icon">
            <AdaptiveLink action="http://telegram.org" stretch />
            <Icon color="#fff" size="32px" name="CustomTelegram" />
          </div>
          <div className="footerSocials__icon">
            <AdaptiveLink action="http://discord.gg" stretch />
            <Icon color="#fff" size="32px" name="CustomDiscord" />
          </div>
          <div className="footerSocials__icon">
            <AdaptiveLink action="http://twitter.com" stretch />
            <Icon color="#fff" size="32px" name="CustomTwitter" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
