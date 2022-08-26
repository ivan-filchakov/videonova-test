import { useSelector } from "react-redux"

function useHeaderInfo() {
  const headerInfo = useSelector((store) => store.siteInfo.headerInfo)
  return { ...headerInfo }
}

function useUserInfo() {
  const userInfo = useSelector((store) => store.userInfo)
  return { ...userInfo }
}

export { useHeaderInfo, useUserInfo }
