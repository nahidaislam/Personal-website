import React, { useState } from "react"
import { Container } from "react-bootstrap"
import PageTitle from "../Elements/PageTitle/PageTitle"

import "./ContactForm.css"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  // const encode = data => {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&")
  // }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    })
  }
  // const handleSubmit = e => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", ...formState }),
  //   })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error))

  //   e.preventDefault()
  // }

  return (
    <section className="contactForm-page">
      <Container className="content-container">
        <PageTitle title="Get in touch" />
        <div className="contact-form ">
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
                <input
                  id="fname"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formState.name}
                />
              </li>
              <li>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formState.email}
                />
              </li>
              <li>
                <label htmlFor="message">Write a message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={formState.message}
                ></textarea>
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
