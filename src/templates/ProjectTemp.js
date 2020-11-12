import React, { useRef, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { TimelineLite, TweenMax, Power3 } from "gsap"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

//Bootstrap
import { Container, Row, Col } from "react-bootstrap"

//Components
import PageTitle from "../components/Elements/PageTitle/PageTitle"
import Button from "../components/Elements/Button/Button"

import Cero from "../components/Projects/Cero/Cero"
import Disasteroid from "../components/Projects/Disasteroid/Disasteroid"

import Layout from "../components/layout.js"

import "./projectTemp.css"

const ProjectTemp = ({ data }) => {
  const shortcodes = {
    Button,
    Cero,
    Disasteroid,
  }

  let projectTemp = useRef(null)
  let title = useRef(null)
  let image = useRef(null)
  let abstract = useRef(null)
  let projectDescription = useRef(null)
  let tl = new TimelineLite({ delay: 0.3 })

  useEffect(() => {
    const pageTitle = title.children[0].children[0].children[0]
    const projectImg = image
    const subhead = abstract.children[0]
    const summary = subhead.nextSibling
    const info = summary.nextSibling
    const description = projectDescription

    tl.from(projectImg, 1, { y: 1280, ease: Power3.easeOut }, "start").from(
      projectImg.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    )
    tl.staggerFrom(
      [pageTitle, subhead, summary, info, description],
      1,
      {
        delay: 0.5,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
      },
      0.15,
      "start"
    )
    //Remove initial flash
    TweenMax.to(projectTemp, 0, { css: { visibility: "visible" } })
  }, [tl])
  return (
    <Layout>
      <section className="projectTemp" ref={el => (projectTemp = el)}>
        <Container className="template-container" ref={el => (title = el)}>
          <PageTitle title={data.mdx.frontmatter.title} />
          <div className="project-info py-2">
            <Row md={12} className="align-items-center project-intro bg-full">
              {/* <Col md={6} ref={el => (image = el)}>
                {data.mdx.frontmatter.thumbnailImage && (
                  <Img
                    fluid={
                      data.mdx.frontmatter.thumbnailImage.childImageSharp.fluid
                    }
                  />
                )}
              </Col> */}
              <Col md={6} className="abstract" ref={el => (abstract = el)}>
                <h2 className="py-3">{data.mdx.frontmatter.secondTitle}</h2>
                <p>{data.mdx.frontmatter.abstract}</p>

                <div className="d-flex justify-content-between py-3">
                  <p>
                    {" "}
                    <span className="textColor">Role</span>:{" "}
                    {data.mdx.frontmatter.role}
                  </p>
                  <p>
                    <span className="textColor">Type</span> :{" "}
                    {data.mdx.frontmatter.type}
                  </p>
                  <p>
                    <span className="textColor">Date</span>:{" "}
                    {data.mdx.frontmatter.date}
                  </p>
                </div>
              </Col>
            </Row>

            <Row md={12}>
              <div className="content" ref={el => (projectDescription = el)}>
                <MDXProvider components={shortcodes}>
                  <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </MDXProvider>
              </div>
            </Row>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default ProjectTemp

export const pageQuery = graphql`
  query SingleProjectQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        abstract
        role
        date
        title
        secondTitle
        type
      }
    }
  }
`
