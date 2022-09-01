import * as AntIcons from "react-icons/ai"
import * as BootstrapIcons from "react-icons/bs"
import * as FontAwesome from "react-icons/fa"
import * as MaterialDesign from "react-icons/md"
import { ReactComponent as CustomCheck } from "./svg/check.svg"
import { ReactComponent as CustomCross } from "./svg/cross.svg"
import { ReactComponent as CustomDiscord } from "./svg/discord.svg"
import { ReactComponent as CustomEye } from "./svg/eye.svg"
import { ReactComponent as CustomEyeClosed } from "./svg/eye-closed.svg"
import { ReactComponent as CustomLogo } from "./svg/logo-main.svg"
import { ReactComponent as CustomPlayVideo } from "./svg/play-video.svg"
import { ReactComponent as CustomHeart } from "./svg/heart.svg"
import { ReactComponent as CustomRating } from "./svg/rating.svg"
import { ReactComponent as CustomSettings } from "./svg/settings.svg"
import { ReactComponent as CustomTelegram } from "./svg/telegram.svg"
import { ReactComponent as CustomTwitter } from "./svg/twitter.svg"
import { ReactComponent as CustomVideoFill } from "./svg/video-fill.svg"
import { ReactComponent as CustomVideoOutline } from "./svg/video-outline.svg"

const CustomIcons = {
  CustomCheck,
  CustomCross,
  CustomDiscord,
  CustomEye,
  CustomEyeClosed,
  CustomHeart,
  CustomLogo,
  CustomPlayVideo,
  CustomRating,
  CustomSettings,
  CustomTelegram,
  CustomTwitter,
  CustomVideoFill,
  CustomVideoOutline,
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
