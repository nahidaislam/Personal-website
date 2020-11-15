// CSS
import "./Subhead.css"

import React from "react"
import { Container } from "react-bootstrap"

const Subhead = ({ subtitle, imgsrc }) => {
  return (
    <Container className="text-center subhead py-5 ">
      <div className=" sub-bg ">
        {/* <img src={imgsrc}></img> */}
        <h2>{subtitle}</h2>
      </div>
    </Container>
  )
}

export default Subhead
