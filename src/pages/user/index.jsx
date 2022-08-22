import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Layout from "../../layout"

function UserPage() {
  const siteInfo = useSelector((store) => store.siteInfo)
  const user = useParams()
  return (
    <Layout>
      <div>
        page content for user {user.id};<br />
        message from store: {siteInfo.test}
      </div>
    </Layout>
  )
}

export default UserPage
