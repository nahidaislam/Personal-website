import React from "react"

//Components
import Hobbies from "../components/Hobbies/Hobbies"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HobbiesPage = () => (
  <Layout>
    <SEO title="Hobbies" />
    <Hobbies />
  </Layout>
)

export default HobbiesPage
