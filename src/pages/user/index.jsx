import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Layout from "../../layout"
import { Heading, Image } from "../../components/primitives"
import VideosList from "../../components/partials/videosList"
import "./style.css"

function UserPage() {
  const params = useParams()
  const user = useSelector((store) => {
    const allUsers = store.allUsers.info
    return allUsers.find((el) => el.slug === params.id)
  })
  console.log(user)

  return (
    <Layout>
      <div className="userPage">
        <div className="userPage__pic">
          <Image src={user.userPic} alt={user.userName} fit="cover" />
        </div>
        <div className="userPage__heading">
          <Heading h={1}>{user.userName}</Heading>
        </div>
        <div className="userPage__content">
          <VideosList />
        </div>
      </div>
    </Layout>
  )
}

export default UserPage
