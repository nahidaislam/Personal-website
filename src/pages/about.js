import React from "react"

//Components
import About from "../components/About/About"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
)

export default AboutPage
