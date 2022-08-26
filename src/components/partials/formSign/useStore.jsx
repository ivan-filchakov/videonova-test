import { useSelector } from "react-redux"

function useSignFormInfo() {
  const signFormInfo = useSelector((store) => store.siteInfo.signFormInfo)
  return { ...signFormInfo }
}

export default useSignFormInfo
