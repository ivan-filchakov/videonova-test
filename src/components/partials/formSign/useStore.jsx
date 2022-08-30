import { useSelector } from "react-redux"

function useSiteInfo() {
  const signFormInfo = useSelector((store) => store.siteInfo.signFormInfo)
  return { ...signFormInfo }
}

function useUserInfo() {
  const user = useSelector((store) => store.user)
  return { ...user }
}

export { useSiteInfo, useUserInfo }
