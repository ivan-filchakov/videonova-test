import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../layout"
import { Button, Heading, Text } from "../../components/primitives"
import UsersList from "../../components/partials/usersList"
import "./style.css"

function HomePage() {
  const homePageInfo = useSelector((store) => store.siteInfo.homePageInfo)
  const userState = useSelector(({ user }) => user)

  const dispatch = useDispatch()
  const showSignForm = () => {
    dispatch({
      type: "modal/placeContent",
      payload: "FormSign",
    })
  }

  const bannerButton = userState.authorized
    ? `/user/${userState.info.slug}`
    : showSignForm

  return (
    <Layout>
      <div className="homePage">
        <div className="homeBanner">
          <div className="homeBanner__heading">
            <Heading h={1} accent={3} accentColor="#FF6363">
              {homePageInfo.heading}
            </Heading>
          </div>
          <div className="homeBanner__text">
            <Text>{homePageInfo.subheading}</Text>
          </div>
          <div className="homeBanner__button">
            <Button
              label={homePageInfo.buttonLabel}
              variant="main"
              onClick={bannerButton}
            />
          </div>
        </div>
        <UsersList />
      </div>
    </Layout>
  )
}

export default HomePage
