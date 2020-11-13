// CSS
import "../Projects.css"

import React from "react"
import { Carousel, Col, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

//Components
import Button from "../../Elements/Button/Button"
import Subhead from "../../Elements/Subhead/Subhead"
import Tool from "../../Elements/Tool/Tool"

//Image query
import ToolImage from "../../toolImage"

const Parkout = () => {
  const { figma } = ToolImage()
  //   const data = useStaticQuery(graphql`
  //     query viaShareImageQuery {
  //       allFile(
  //         filter: {
  //           ext: { regex: "/(jpg)|/(jpeg)|(png)/" }
  //           relativeDirectory: { eq: "Projects/Parkout" }
  //         }
  //       ) {
  //         edges {
  //           node {
  //             id
  //             name
  //             base
  //             childImageSharp {
  //               fluid {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)

  return (
    <div className="parkout-template content-container">
      <div className="py-4">
        <Row md={12}>
          <Col md={6} className="pr-5">
            <h4>The initial idea</h4>
            <p>
              There are three features in the application. The home page is a
              map showing nearby parks along with the user's current position
              with a bouncing mark. The second tab is designed for an anonymous
              chat room where the user's location (nearest park) is used as
              their username. The goal of the chat forum is to inform others
              about ongoing events in parks, giving tips, asking for help, or
              simply to make contact with others. If someone is grilling and has
              forgotten the ketchup, they can ask people in the park if anyone
              could borrow them some ketchup. The chat simply facilitates people
              going to a park or hanging out in a park. If the user wants to
              reach the nearest park directly, they can use the "Instaparkout"
              button to see the direction of the location.
            </p>
          </Col>
          <Col md={6} className="pl-5">
            <h4>Bugs</h4>
            <p>
              The current version of this mobile app has some bugs. To be able
              to use the Onsen UI framework, the JavaScript features needed to
              rewrite to AngularJS. After rewriting, the Google Maps built-in
              the zoom-out button does not work whereas the zoom-in button works
              flawlessly. The second bug was found when the app was opened from
              Chrome on an Android mobile. The chatbox on Android mobiles does
              not look properly, nor does it go up with the keyboard when you
              want to write something. There are two weaknesses when it comes to
              the chat function. The chat-function is not bug-free and does not
              work as it should. Another problem is that no database for saving
              the chat is implemented. The idea was that when the user opens the
              chat tab, messages from different parks will be displayed.
            </p>
          </Col>
        </Row>
        <Row md={12}>
          <Col md={6} className="pr-5">
            <h4>The redesign</h4>
            <p>
              For practice purposes, I recently have created an interactive
              prototype of the app in Adobe XD.{" "}
            </p>
          </Col>
          <Col md={6} className="pl-5">
            <h4>The prototyping tool</h4>
            <Tool alt="figma" imgsrc={figma.childImageSharp.fixed}>
              Figma
            </Tool>
          </Col>
        </Row>
      </div>

      <Subhead subtitle="The Re-designed app" />
      <div className="carousel">
        {/* <Carousel>
          {data.allFile.edges.map(({ node }) => (
            <Carousel.Item>
              <Img
                key={node.id}
                fluid={node.childImageSharp.fluid}
                alt={node.base.split(".")[0]}
              />
            </Carousel.Item>
          ))}
        </Carousel> */}
      </div>
      <div className="members">
        {" "}
        <p className="py-5 text-center">
          Special thanks to the project members: Emil Erlandsson, Emilia Sjögren
          Larsson, Felix Dimberg & Nahida Islam(me).
        </p>
      </div>

      <Row className=" m-0 p-0 justify-content-around">
        <Button href="https://www.behance.net/gallery/102203109/ParkOut">
          Behance
        </Button>
        <Button href="https://github.com/nahidaislam/Mobile-Development-with-Web-Technologies-DM2518/tree/master/Parkout-App">
          Github
        </Button>
      </Row>
    </div>
  )
}

export default Parkout
