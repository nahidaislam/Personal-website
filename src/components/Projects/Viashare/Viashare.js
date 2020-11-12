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
      <Row md={12}>
        <Col md={6} className="pr-5">
          <h4>The social feature</h4>
          <p>
            The ViaShare feature is implemented in every episode of a program on
            Viafree. By clicking on the ViaShare button you get access to your
            Facebook friends list. You have the possibility to select either a
            specific friend or several friends with whom you would like to watch
            a program. After selecting your desired friend/s you can set up a
            date and a time. Last but not least, you get a preview on all of
            your previous selection and the option to write a message. Last but
            not least, click the Send button and your invitation is successfully
            sent!
          </p>
        </Col>
        <Col md={6} className="pl-5">
          <h4>Simplify the communication</h4>
          <p>
            The invitation will be sent as a link on Facebook Messenger. The
            invited user will get the invitation as a message. The user will
            then get a choice of accepting or declining the invitation. If the
            invitation gets accepted - a link to the episode will appear. The
            user will get an additional notification with the link 30 minutes
            before the planned event. The message will be sent in a group
            message if a group is invited.
          </p>
        </Col>
      </Row>
      <Row md={12}>
        <Col md={6} className="pr-5">
          <h4>Establish the plan</h4>
          <p>
            Now it’s time to watch the program together. The feature enables you
            to watch the program at the same time. You can even talk to and/or
            see each other. The person who sent the invitation is in control of
            the remote. In other words, the person is in control of playing and
            pausing the program. In the video player, all participants can see
            who is logged in.
          </p>
        </Col>
        <Col md={6} className="pl-5">
          <h4> My role </h4>
          <p>
            I mainly focused on designing the share function. I have also
            participated on idea generation.
          </p>
        </Col>
      </Row>
      <Row md={12}>
        <Col md={12} className="pr-5">
          <h4>The prototyping tool</h4>
          <Tool alt="figma" imgsrc={figma.childImageSharp.fixed}>
            Figma
          </Tool>
        </Col>
      </Row>
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

      <p className="py-5 text-center">
        Special thanks to the project members: Leila Englund, Nahida Islam(me)
        and Rebecka Möller
      </p>

      <Row>
        <Button href="https://kth.diva-portal.org/smash/record.jsf?dswid=-2112&pid=diva2%3A1459712&c=1&searchType=SIMPLE&language=sv&query=nahida+islam&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all">
          Thesis report
        </Button>
      </Row>
    </div>
  )
}

export default Viashare
