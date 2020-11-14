// CSS
import "./NavigationBtn.css"

import React from "react"
import { Col, Row } from "react-bootstrap"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

const NavigationBtn = ({ leftHref, leftText, rightHref, rightText }) => {
  //Style the buttons
  const ScrollUpBtn = styled.button`
    color: var(--text-color);
    background: transparent;
    border: none;
  `
  return (
    <div>
      <Row md={12} className=" navbtn ">
        <Col md={4}>
          <div className="float-left">
            <a href={leftHref}>
              <FaArrowLeft className="mr-3" />
              {leftText}
            </a>
          </div>
        </Col>

        <Col md={4} className="scrollupBtn d-flex justify-content-center">
          <ScrollUpBtn className="button" onClick={() => scrollTo("#template")}>
            Scroll to top
          </ScrollUpBtn>
        </Col>

        <Col md={4}>
          <div className="float-right">
            <a href={rightHref}>
              {rightText}
              <FaArrowRight className="ml-3" />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default NavigationBtn
