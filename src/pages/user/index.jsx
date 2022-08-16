import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import Layout from "../../layout"

function UserPage() {
  const someStyle = {
    padding: "16px 56px",
    textTransform: "none",
    fontWeight: 400,
    fontSize: "16px",
    borderRadius: "44px",
  }
  const newFontFamily = createTheme({
    textTransform: "none",
    typography: {
      textTransform: "none",
      fontFamily: [
        "Plus Jakarta Display",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ].join(","),
    },
  })

  const siteInfo = useSelector((store) => store.siteInfo)
  const user = useParams()
  return (
    <Layout>
      <div>
        page content for user {user.id};<br />
        message from store: {siteInfo.test}
        <br />
        <Button style={someStyle} theme={newFontFamily} variant="contained">
          page content
        </Button>
        <Button variant="contained">page content</Button>
      </div>
    </Layout>
  )
}

export default UserPage
