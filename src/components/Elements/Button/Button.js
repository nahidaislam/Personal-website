// CSS
import "./Button.css"

import React from "react"

const Button = ({ href, children }) => {
  return (
    <div className="link-button mx-2">
      <button type="button" className="btn button ">
        <a target="_blank" rel="noopener noreferrer" href={href}>
          {children}
        </a>
      </button>
    </div>
  )
}

export default Button
