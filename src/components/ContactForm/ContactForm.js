import React, { useRef, useEffect } from "react"
import { Container } from "react-bootstrap"
import PageTitle from "../Elements/PageTitle/PageTitle"
import { Power3, TweenMax } from "gsap"

import "./ContactForm.css"

const ContactForm = () => {
  let contact = useRef(null)
  let title = useRef(null)
  let content = useRef(null)

  //The animation
  useEffect(() => {
    const pageTitle = title.children[0].children[0].children[0]
    const form = content

    //Remove initial flash
    TweenMax.to(contact, 0, { css: { visibility: "visible" } })

    TweenMax.staggerFrom(
      [pageTitle, form],
      1,
      {
        delay: 0.5,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
      },
      0.15
    )
  }, [])

  return (
    <section className="contactForm-page" ref={el => (contact = el)}>
      <Container className="content-container" ref={el => (title = el)}>
        <PageTitle title="Get in touch" />
        <div className="contact-form " ref={el => (content = el)}>
          <form
            onSubmit="submit"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <ul className="input-list">
              <li>
                <label htmlFor="fname">Your name</label>
                <input id="fname" type="text" name="name" />
              </li>
              <li>
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" name="email" />
              </li>
              <li>
                <label htmlFor="message">Write a message</label>
                <textarea id="message" name="message"></textarea>
              </li>

              <div className="send-button">
                <button type="submit" className="btn button ">
                  Send message
                </button>
              </div>
            </ul>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactForm
