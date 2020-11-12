import React from "react"

import { Container } from "react-bootstrap"

// CSS
import "./Button.css"

const Button = ({ href, children }) => {
  return (
    <Container className=" d-flex justify-content-center py-3">
      <div className="primary-button">
        <button type="button" className="btn button">
          <a target="_blank" rel="noopener noreferrer" href={href}>
            {children}
          </a>
        </button>
      </div>
    </Container>
  )
}

export default Button
