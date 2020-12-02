// CSS
import "./Subhead.css"

import React from "react"
import { Container } from "react-bootstrap"

const Subhead = ({ subtitle }) => {
  return (
    <Container className="text-center subhead py-5 ">
      <div className=" sub-bg ">
        <h2>{subtitle}</h2>
      </div>
    </Container>
  )
}

export default Subhead
