import React from "react"

//Components
import Home from "../components/Home/Home"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
