import { useSelector } from "react-redux"

function useHeaderInfo() {
  const headerInfo = useSelector((store) => store.siteInfo.headerInfo)
  return { ...headerInfo }
}

function useUserInfo() {
  const user = useSelector((store) => store.user2)
  return { ...user }
}

export { useHeaderInfo, useUserInfo }
