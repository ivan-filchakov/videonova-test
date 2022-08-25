import { useSelector } from "react-redux"

export function useSignFormInfo() {
  const signFormInfo = useSelector((store) => store.siteInfo.signFormInfo)
  return { ...signFormInfo }
}
