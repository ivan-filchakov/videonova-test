import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import Layout from "../../layout"
import { Heading, Image } from "../../components/primitives"
import VideosList from "../../components/partials/videosList"
import {
  useSiteInfo,
  useAllUsers,
  useUserSlice,
  useVideoSlice,
} from "../../store/selectors"
import "./style.css"

function UserPage() {
  const routeParams = useParams()
  const dispatch = useDispatch()

  const pageInfo = useSiteInfo().userPageInfo
  const usersInfo = useAllUsers().info
  const authUser = useUserSlice()
  console.log({ authUser })

  const [user, setUser] = useState(false)
  useEffect(() => {
    if (!usersInfo) dispatch({ type: "allUsers/request" })
    if (usersInfo) setUser(usersInfo.find((el) => el.slug === routeParams.id))
  }, [usersInfo])

  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    if (authUser.authorized && authUser.info.id === user.id) setAdmin(true)
  }, [user, authUser])

  const loadingBlock = user ? "" : " userPage_gradientBlock"
  const loadingLine = user ? "" : " userPage_gradientLine"

  const { postSuccess, info } = useVideoSlice()
  const openModal = () => {
    if (postSuccess) dispatch({ type: "video/resetPostSuccess" })
    dispatch({
      type: "modal/placeContent",
      payload: "FormAddVideo",
    })
  }

  useEffect(() => {
    if (info) dispatch({ type: "allUsers/request" })
  }, [info])

  return (
    <Layout>
      <div className="userPage">
        <div className={`userPage__pic${loadingBlock}`}>
          {user && <Image src={user.userPic} alt={user.userName} fit="cover" />}
        </div>
        <div className={`userPage__heading${loadingLine}`}>
          <Heading h={1} loading={!user}>
            {user.userName}
          </Heading>
        </div>
        <div className="userPage__content">
          <VideosList
            video={user.video}
            userName={user.userName}
            heading={pageInfo.videosList.heading}
            buttonLabel={pageInfo.videosList.buttonLabel}
            isEmpty={pageInfo.videosList.isEmpty}
            admin={admin}
            openModal={openModal}
          />
        </div>
      </div>
    </Layout>
  )
}

export default UserPage
