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
import NavigationBtn from "../../Elements/NavigationBtn/NavigationBtn"

//Image query
import ToolImage from "../../toolImage"

const Viashare = () => {
  const { figma } = ToolImage()
  const data = useStaticQuery(graphql`
    query viaShareImageQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|/(jpeg)|(png)/" }
          relativeDirectory: { eq: "Projects/Viashare" }
        }
      ) {
        edges {
          node {
            id
            name
            base
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

  return (
    <div className="viashare-template content-container">
      <div className="py-4">
        <Row md={12}>
          <Col md={6}>
            <Col md={12}>
              <h4>The social feature</h4>
              <p>
                The ViaShare feature is implemented in every episode of a
                program on Viafree. By clicking on the ViaShare button you get
                access to your Facebook friends list. You can select either a
                specific friend or several friends with whom you would like to
                watch a program. After selecting your desired friend/s you can
                set up a date and a time. Last but not least, you get a preview
                of all of your previous selection and the option to write a
                message. Last but not least, click the Send button and your
                invitation is successfully sent!
              </p>

              <h4>Simplify the communication</h4>
              <p>
                The invitation will be sent as a link on Facebook Messenger. The
                invited user will get the invitation as a message. The user will
                then get a choice of accepting or declining the invitation. If
                the invitation gets accepted - a link to the episode will
                appear. The user will get an additional notification with the
                link 30 minutes before the planned event. The message will be
                sent in a group message if a group is invited.
              </p>
            </Col>
          </Col>
          <Col md={6}>
            <Col md={12}>
              <h4>Establish the plan</h4>
              <p>
                Now it’s time to watch the program together. The feature enables
                you to watch the program at the same time. You can even talk to
                and/or see each other. The person who sent the invitation is in
                control of the remote. In other words, the person is in control
                of playing and pausing the program. In the video player, all
                participants can see who is logged in.
              </p>

              <h4>The prototyping tool</h4>
              <Row className=" m-0 pt-4">
                <Tool alt="figma" imgsrc={figma.childImageSharp.fixed}>
                  Figma
                </Tool>
              </Row>
            </Col>
          </Col>
        </Row>
      </div>

      <Subhead subtitle="The Designed function" />
      <div className="carousel">
        <Carousel>
          {data.allFile.edges.map(({ node }) => (
            <Carousel.Item>
              <Img
                key={node.id}
                fluid={node.childImageSharp.fluid}
                alt={node.base.split(".")[0]}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="members">
        {" "}
        <p className="py-5 text-center">
          Special thanks to the project members: Leila Englund, Nahida Islam
          (me) & Rebecka Möller.
        </p>
      </div>

      <Row className=" m-0 p-0 justify-content-center">
        <Button href="https://www.figma.com/proto/ety8OASWvS22SnMuk6GoEobg/Share-function?node-id=327%3A7359&scaling=min-zoom">
          Prototype
        </Button>
      </Row>

      <NavigationBtn
        leftHref="/projects/disasteroid"
        leftText="Previous project "
        rightHref="/projects/parkout"
        rightText="Next project"
      />
    </div>
  )
}

export default Viashare
