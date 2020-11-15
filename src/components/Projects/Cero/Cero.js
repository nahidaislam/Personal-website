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

const Cero = () => {
  const { figma } = ToolImage()
  const data = useStaticQuery(graphql`
    query ceroImageQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|/(jpeg)|(png)/" }
          relativeDirectory: { eq: "Projects/Cero" }
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

  // const captions = [
  //   "The landing page",
  //   "The Smorgasbord Page",
  //   "Statistic",
  //   "The overview of the Action plan",
  //   "The Gant chart",
  //   "History of the saved versions",
  //   "Setting page",
  // ]

  return (
    <div className="cero-template content-container">
      <div className="py-4">
        <Row md={12}>
          <Col md={6} className="pr-5">
            <h4>The CERO simulation tool</h4>
            <p>
              CERO (Climate and Economic Research in Organizations) is a concept
              developed by Markus Robèrt to help organizations find economically
              sustainable strategies to achieve set climate goals for travel.
              Together with the organizations/companies, CERO organizes
              workshops held by CERO experts. To facilitate practical work
              during the workshop the CERO simulation tool has been developed.
              The organizations/companies have access to the tool after the
              workshop to continue working with it internally.
            </p>
          </Col>
          <Col md={6} className="pl-5">
            <h4>The project goal</h4>
            <p>
              Many of today’s technologies lack the essence of usability and UX
              due to the gap between the practice and the literature. This study
              explores how the usability of an existing tool, namely the CERO
              simulation tool can be improved through usercentered design.
            </p>
          </Col>
        </Row>
        <Row md={12}>
          <Col md={6} className="pr-5">
            <h4>The research process</h4>
            <li>Specify the context of the use</li>
            <li>Specify requirements</li>
            <li>Create a design solution</li>
            <li>Evaluate the design solution</li>
          </Col>
          <Col md={6} className="pl-5">
            <h4>The prototyping tool</h4>
            <Row className=" m-0 pt-4">
              <Tool alt="figma" imgsrc={figma.childImageSharp.fixed}>
                Figma
              </Tool>
            </Row>
          </Col>
        </Row>
      </div>

      <Subhead subtitle="The redesigned tool" />
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
        {/* <Row md={12}>
          {data.allFile.edges.map(({ node }) => (
            <Col md={6} className="image-grid py-5">
              <Img
                key={node.id}
                className="image-item"
                fluid={node.childImageSharp.fluid}
                alt={node.base.split(".")[0]}
              />
            </Col>
          ))}
        </Row> */}
      </div>

      <Subhead subtitle="Learnings" />
      <Row md={12} className="learning-section py-4">
        <Col md={6} className="pr-5">
          <h4>Why user wants it</h4>
          <p>
            It is important to put the weight on figuring out why a user wants
            something, rather than what the user wants. According to the
            evaluation results, most of the test subjects agreed to the idea of
            having a Gantt-chart. However, the purpose of it was not clear for
            some of the test subjects. Most of the subjects asked for a
            progression bar, presenting how each participant is doing with the
            assigned measure. I in this case focused solely on what the user
            wants, which can be considered as a weakness.
          </p>
        </Col>
        <Col md={6} className="pl-5">
          <h4>User does not always know</h4>
          <p>
            The result of the pre-study reveals that the users seldom can
            articulate an answer to how would they design a specific function.
            It was evident in the results that the user does not always know
            what they would like to see in a product before they get a glimpse
            of it in a live version. An iterative UCD (User centered design)
            process is, therefore, essential to be certain about the design
            choice
          </p>
        </Col>
      </Row>

      <Row className=" m-0 p-0 justify-content-center">
        <Button href="https://kth.diva-portal.org/smash/record.jsf?dswid=-2112&pid=diva2%3A1459712&c=1&searchType=SIMPLE&language=sv&query=nahida+islam&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all">
          Thesis report
        </Button>
        <Button href="https://www.figma.com/proto/xsvmolHIFKxdxuHchYEdar/CERO?node-id=397%3A16721&scaling=contain">
          Prototype
        </Button>
      </Row>

      <NavigationBtn
        leftHref="/projects"
        leftText="View all projects "
        rightHref="/projects/djtable"
        rightText="Next project"
      />
    </div>
  )
}

export default Cero
