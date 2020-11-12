// CSS
import "./PageTitle.css"

import React from "react"
import { Container } from "react-bootstrap"

const PageTitle = ({ title }) => {
  return (
    <Container className="text-center">
      <div className="pageTitle">
        <h1>{title}</h1>
      </div>
    </Container>
  )
}

export default PageTitle
