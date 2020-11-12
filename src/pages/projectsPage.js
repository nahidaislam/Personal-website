import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//  import ProjectCards from "../components/Projects/projectCards"
import DisplayCard from "../components/ProjectCard/DisplayCard"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    {/* <ProjectCards /> */}
    <DisplayCard />
  </Layout>
)

export default ProjectsPage
