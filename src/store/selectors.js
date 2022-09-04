import { useSelector } from "react-redux"

function useSiteInfo() {
  const siteInfo = useSelector((store) => store.siteInfo)
  return { ...siteInfo }
}

function useSignFormInfo() {
  const signFormInfo = useSelector((store) => store.siteInfo.signFormInfo)
  return { ...signFormInfo }
}

function useUserSlice() {
  const user = useSelector((store) => store.user)
  return { ...user }
}

function useUserInfo() {
  const userInfo = useSelector((store) => store.user.info)
  return { ...userInfo }
}

function useAddVideoFormInfo() {
  const addVideoFormInfo = useSelector(
    ({ siteInfo }) => siteInfo.addVideoFormInfo
  )
  const videoSlice = useSelector(({ video }) => video)
  const userInfo = useUserInfo()
  return { ...addVideoFormInfo, ...videoSlice, userInfo }
}

export {
  useSiteInfo,
  useAddVideoFormInfo,
  useUserSlice,
  useUserInfo,
  useSignFormInfo,
}
