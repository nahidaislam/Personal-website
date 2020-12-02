//CSS
import "./Socials.css"

import React from "react"
import { FaBehance, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="socials">
      <ul className="social-ul">
        <li>
          <a href="https://github.com/nahidaislam" target="blank">
            <FaGithub className="social-media-fill" size="20px" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nahida-islam/" target="blank">
            <FaLinkedinIn className="social-media-fill" size="20px" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/itsnahida " target="blank">
            <FaBehance className="social-media-fill" size="20px" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/its.nahida/" target="blank">
            <FaInstagram className="social-media-fill" size="20px" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
