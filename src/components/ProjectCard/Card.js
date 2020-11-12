//CSS
import "./Card.css"

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ link, imgsrc, alt, title, description }) => {
  return (
    <div className="item">
      <Link to={link}>
        <Img fluid={imgsrc} alt={alt} />
        <div className="item-hover">
          <div className="item-info p-6">
            <span>{title}</span>
            <em>{description}</em>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
