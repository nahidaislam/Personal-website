// CSS
import "./NavigationBtn.css"

import React from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const NavigationBtn = ({ leftHref, leftText, rightHref, rightText }) => {
  return (
    <div className="navbtn">
      <div className="float-left">
        <a href={leftHref}>
          <FaArrowLeft className="mr-3" />
          {leftText}
        </a>
      </div>
      <div className="float-right">
        <a href={rightHref}>
          {rightText}
          <FaArrowRight className="ml-3" />
        </a>
      </div>
    </div>
  )
}

export default NavigationBtn
