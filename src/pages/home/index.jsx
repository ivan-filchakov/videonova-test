import React from "react"
import { useDispatch } from "react-redux"
import Layout from "../../layout"
import { Button, Heading, Text } from "../../components/primitives"
import UsersList from "../../components/partials/usersList"
import { useSiteInfo, useUserSlice } from "../../store/selectors"
import "./style.css"

function HomePage() {
  const { homePageInfo } = useSiteInfo()
  const user = useUserSlice()

  const dispatch = useDispatch()
  const showSignForm = () => {
    dispatch({
      type: "modal/placeContent",
      payload: "FormSign",
    })
  }

  const bannerButton = user.authorized
    ? `/user/${user.info.slug}`
    : showSignForm

  return (
    <Layout>
      <div className="homePage">
        <div className="homePage__welcome">
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
        </div>
        <div className="homePage__content">
          <UsersList />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
