import * as AntIcons from "react-icons/ai"
import * as BootstrapIcons from "react-icons/bs"
import * as FontAwesome from "react-icons/fa"
import * as MaterialDesign from "react-icons/md"
import { ReactComponent as Check } from "./svg/check.svg"
import { ReactComponent as Cross } from "./svg/cross.svg"
import { ReactComponent as Discord } from "./svg/discord.svg"
import { ReactComponent as Eye } from "./svg/eye.svg"
import { ReactComponent as Heart } from "./svg/heart.svg"
import { ReactComponent as Rating } from "./svg/rating.svg"
import { ReactComponent as Settings } from "./svg/settings.svg"
import { ReactComponent as Telegram } from "./svg/telegram.svg"
import { ReactComponent as Twitter } from "./svg/twitter.svg"
import { ReactComponent as VideoFill } from "./svg/video-fill.svg"
import { ReactComponent as VideoOutline } from "./svg/video-outline.svg"
import { ReactComponent as LogoMain } from "./svg/logo-main.svg"

const CustomIcons = {
  CustomCheck: Check,
  CustomCross: Cross,
  CustomDiscord: Discord,
  CustomEye: Eye,
  CustomHeart: Heart,
  CustomRating: Rating,
  CustomSettings: Settings,
  CustomTelegram: Telegram,
  CustomTwitter: Twitter,
  CustomVideoFill: VideoFill,
  CustomVideoOutline: VideoOutline,
  LogoMain,
}

export default function useIconLibraries() {
  return {
    Custom: CustomIcons,
    Ai: AntIcons,
    Bs: BootstrapIcons,
    Fa: FontAwesome,
    Md: MaterialDesign,
  }
}
