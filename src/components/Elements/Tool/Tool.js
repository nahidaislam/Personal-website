import React from "react"
import Img from "gatsby-image"

const Tool = ({ alt, imgsrc, children }) => {
  return (
    <div className="tool">
      <Img fixed={imgsrc} alt={alt} />
      <p> {children}</p>
    </div>
  )
}
export default Tool
