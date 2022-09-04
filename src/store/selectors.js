import { useSelector } from "react-redux"

function useAddVideoFormInfo() {
  const addVideoFormInfo = useSelector(
    ({ siteInfo }) => siteInfo.addVideoFormInfo
  )
  const videoSlice = useSelector(({ video }) => video)
  const userInfo = useSelector((store) => store.user.info)
  return { ...addVideoFormInfo, ...videoSlice, userInfo }
}

function useAllUsers() {
  const users = useSelector(({ allUsers }) => allUsers)
  return { ...users }
}

function useSignFormInfo() {
  const signFormInfo = useSelector((store) => store.siteInfo.signFormInfo)
  return { ...signFormInfo }
}

function useSiteInfo() {
  const siteInfo = useSelector((store) => store.siteInfo)
  return { ...siteInfo }
}

function useUserInfo() {
  const userInfo = useSelector((store) => store.user.info)
  return { ...userInfo }
}

function useUserSlice() {
  const user = useSelector((store) => store.user)
  return { ...user }
}

function useVideoSlice() {
  const videoSlice = useSelector(({ video }) => video)
  return { ...videoSlice }
}

export {
  useAddVideoFormInfo,
  useAllUsers,
  useSignFormInfo,
  useSiteInfo,
  useUserInfo,
  useUserSlice,
  useVideoSlice,
}
