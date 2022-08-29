import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Layout from "../../layout"
import { Heading, Image } from "../../components/primitives"
import "./style.css"

function UserPage() {
  const userInfo = useSelector(({ allUsers }) => allUsers.info)
  const params = useParams()

  const user = userInfo.find((el) => el.slug === params.id)

  return (
    <Layout>
      <div className="userPage">
        <div className="userPage__pic">
          <Image src={user.userPic} alt={user.userName} fit="cover" />
        </div>
        <div className="userPage__heading">
          <Heading h={1}>{user.userName}</Heading>
        </div>
        <div className="userPage__content">page content</div>
      </div>
    </Layout>
  )
}

export default UserPage
