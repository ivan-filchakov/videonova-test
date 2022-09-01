import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../layout"
import { Heading, Image } from "../../components/primitives"
import VideosList from "../../components/partials/videosList"
import "./style.css"

function UserPage() {
  const routeParams = useParams()
  const dispatch = useDispatch()

  const pageInfo = useSelector((store) => store.siteInfo.userPageInfo)
  const users = useSelector((store) => store.allUsers.info)
  const authUser = useSelector(({ user }) => user)

  const [user, setUser] = useState(false)
  useEffect(() => {
    if (!users) dispatch({ type: "allUsers/request" })
    if (users) setUser(users.find((el) => el.slug === routeParams.id))
  }, [users])

  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    if (authUser.authorized && authUser.info.id === user.id) setAdmin(true)
  }, [user, authUser])

  const loadingBlock = user ? "" : " userPage_gradientBlock"
  const loadingLine = user ? "" : " gradientLine"

  const openModalUpload = () => {
    dispatch({
      type: "modal/placeContent",
      payload: "FormVideoUpload",
    })
  }

  return (
    <Layout>
      <div className="userPage">
        <div className={`userPage__pic${loadingBlock}`}>
          {user && <Image src={user.userPic} alt={user.userName} fit="cover" />}
        </div>
        <div className={`userPage__heading${loadingLine}`}>
          <Heading h={1} loading={!user}>
            {user && user.userName}
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
            openModalUpload={openModalUpload}
          />
        </div>
      </div>
    </Layout>
  )
}

export default UserPage
