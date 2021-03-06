// CSS
import "./NavigationBtn.css"

import React from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "gatsby"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

//Style the buttons
const ScrollUpBtn = styled.button`
  color: var(--text-color);
  background: transparent;
  border: none;
`

const NavigationBtn = ({ leftHref, leftText, rightHref, rightText }) => {
  return (
    <Row className=" navbtn ">
      <Col>
        <div className="float-left">
          <Link to={leftHref}>
            <FaArrowLeft className="mr-3" />
            <span>{leftText}</span>
          </Link>
        </div>
      </Col>
      <Col className="scrollupBtn d-flex justify-content-center">
        <ScrollUpBtn className="button" onClick={() => scrollTo("#template")}>
          Scroll to top
        </ScrollUpBtn>
      </Col>
      <Col>
        <div className="float-right">
          <Link to={rightHref}>
            <span> {rightText}</span>
            <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default NavigationBtn
