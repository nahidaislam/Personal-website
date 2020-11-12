import React from "react"

import { Container } from "react-bootstrap"

// CSS
import "./Subhead.css"

const Subhead = ({ subtitle, imgsrc }) => {
  return (
    <Container className="text-center subhead  ">
      <div className=" sub-bg ">
        {/* <img src={imgsrc}></img> */}
        <h2>{subtitle}</h2>
      </div>
    </Container>
  )
}

export default Subhead