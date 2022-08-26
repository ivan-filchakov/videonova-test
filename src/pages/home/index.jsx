import React from "react"
import Layout from "../../layout"
import { Button, Heading, Text } from "../../components/primitives"
import "./style.css"

function HomePage() {
  return (
    <Layout>
      <div className="homeBanner">
        <div className="homeBanner__heading">
          <Heading h={1} accent={3} accentColor="#FF6363">
            Welcome to VideoNova
          </Heading>
        </div>
        <div className="homeBanner__text">
          <Text>
            Creative videos with a single click. Add subtitles, transcribe and
            more
          </Text>
        </div>
        <div className="homeBanner__button">
          <Button label="Button" variant="main" />
        </div>
      </div>
    </Layout>
  )
}
export default HomePage
