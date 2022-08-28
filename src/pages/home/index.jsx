import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../layout"
import { Button, Heading, Text } from "../../components/primitives"
import "./style.css"

function HomePage() {
  const homePageInfo = useSelector((store) => store.siteInfo.homePageInfo)

  const dispatch = useDispatch()
  const showSignForm = () => {
    dispatch({
      type: "modal/placeContent",
      payload: "FormSign",
    })
  }

  return (
    <Layout>
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
            onClick={showSignForm}
          />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
