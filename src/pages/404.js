import React from "react"

import NotFound from "../components/Elements/NotFound/Notfound"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
