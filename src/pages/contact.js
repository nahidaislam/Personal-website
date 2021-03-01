import React from "react"

//Components
import ContactForm from "../components/ContactForm/ContactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactForm />
  </Layout>
)

export default ContactPage
