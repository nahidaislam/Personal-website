//CSS
import "./Socials.css"

import React from "react"
import { FaBehance, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="socials">
      <ul className="social-ul">
        <li>
          <a href="https://github.com/nahidaislam">
            <FaGithub className="social-media-fill" size="20px" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nahida-islam/">
            <FaLinkedinIn className="social-media-fill" size="20px" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/itsnahida ">
            <FaBehance className="social-media-fill" size="20px" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/its.nahida/">
            <FaInstagram className="social-media-fill" size="20px" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
