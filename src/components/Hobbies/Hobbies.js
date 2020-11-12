//CSS
import "./Hobbies.css"

import React, { useEffect, useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Power3, TweenMax } from "gsap"

//Components
import PageTitle from "../Elements/PageTitle/PageTitle"

const Hobbies = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|/(jpeg)|(png)/" }
          relativeDirectory: { eq: "Hobbies" }
        }
      ) {
        edges {
          node {
            id
            base
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  //animation vars
  let hobbies = useRef(null)
  let title = useRef(null)
  let hobbiesText = useRef(null)
  let hobbiesImages = useRef(null)

  //The animation
  useEffect(() => {
    const pageTitle = title.children[0].children[0].children[0]
    const text = hobbiesText
    const images = hobbiesImages

    //Remove initial flash
    TweenMax.to(hobbies, 0, { css: { visibility: "visible" } })

    TweenMax.staggerFrom(
      [pageTitle, text, images],
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
    <section className="hobbies" ref={el => (hobbies = el)}>
      <Container className="content-container" ref={el => (title = el)}>
        <PageTitle title="Hobbies" />
        <div className="hobbies-content" ref={el => (hobbiesText = el)}>
          <p>
            Since I was a child, I have always had a fascination with fashion
            and makeup. My mother mentioned that my preschool teacher told her
            that when other children pull out books to read and play with
            kitchen stuff, I used to put on clothes and do catwalks. I guess
            that's when I first fell in love with fashion and makeup. A few
            years ago, I was battling depression. During that time, I resumed my
            makeup journey, and opened an{" "}
            <a href="https://www.instagram.com/its.nahida/">Instagram</a>{" "}
            account. Today, this is one of my favorite hobbies.
          </p>
          <p>
            Other than makeup, I enjoy taking photos of nature, playing with
            paper and pen, creating paintings, gardening, and sometimes working
            out. I believe art and creativity is one of my fortes. I like to
            imagine, play with colors, and always evolve as an artist. By the
            way, did I forget to mention how much I love food? Yeah, I am a
            foodie. In my spare time, I travel to different places in Stockholm
            and try out different types of food. My favorite is a hot bowl of
            Ramen{" "}
            <span role="img" aria-label="Steaming-Bowl">
              🍜
            </span>
          </p>
        </div>

        <Row ref={el => (hobbiesImages = el)} md={12}>
          {data.allFile.edges.map(({ node }) => (
            <Col md={4} className="p-3 image-grid">
              <Img
                key={node.id}
                className="image-item"
                fluid={node.childImageSharp.fluid}
                alt={node.base.split(".")[0]}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Hobbies
