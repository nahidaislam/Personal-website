import { Carousel, Col, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

import Button from "../../Elements/Button/Button"
import Img from "gatsby-image"
import React from "react"
import Subhead from "../../Elements/Subhead/Subhead"
import Tool from "../../Elements/Tool/Tool"
import ToolImage from "../../toolImage"

//Bootstrap


//Components




//Image query


// CSS
// import "./cero.css"

const Disasteroid = () => {
  const { figma } = ToolImage()
  const data = useStaticQuery(graphql`
    query disImageQuery {
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
      <Row md={12} className="py-3">
        <Col md={6}>
          <h4>The project goal</h4>
          <p>
            Many of today’s technologies lack the essence of usability and UX
            due to the gap between the practice and the literature. This study
            explores how the usability of an existing tool, namely the CERO
            simulation tool can be improved through usercentered design.
          </p>
        </Col>
        <Col md={6}>
          <h4>The research process</h4>
          <li>Specify the context of the use</li>
          <li>Specify requirements</li>
          <li>Create a design solution</li>
          <li>Evaluate the design solution</li>
        </Col>
      </Row>
      <Row md={12}>
        <Col md={6}>
          <h4>The CERO simulation tool</h4>
          <p>
            Together with the organizations/companies, CERO organizes workshops
            held by CERO experts. To facilitate practical work during the
            workshop the CERO simulation tool has been developed. During the
            workshops, a tailored target scenario and a plan for upcoming steps
            in the development and role distribution is designed. The
            organizations/companies have access to the tool after the workshop
            to continue working with it internally.
          </p>
        </Col>
        <Col md={6}>
          <h4> The company </h4>
          <p>
            CERO (Climate and Economic Research in Organizations) is a concept
            developed by Markus Robèrt to help organizations find economically
            sustainable strategies to achieve set climate goals for travel.
          </p>
        </Col>
      </Row>
      <Row md={12}>
        <Col md={12}>
          <h4>The prototyping tool</h4>
          <Tool alt="figma" imgsrc={figma.childImageSharp.fixed}>
            Figma
          </Tool>
        </Col>
      </Row>
      <Subhead subtitle="The redesigned tool" />

      <Carousel className="py-3 carousel">
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
      <Subhead subtitle="Learnings" />
      <Row md={12} className="py-3">
        <Col md={6}>
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
        <Col md={6}>
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
      <Row md={12} className="py-3">
        <Col md={6}>
          <h4>Limitations</h4>
          <p>
            The master thesis was conducted as the master’s degree project in
            Interactive media technology by a student at KTH. Therefore, the
            restrictions in time and resources limited the scope of the project.
            The master thesis aims to provide a redesign of the web version of
            the original tool, in the form of a high-fidelity interactive
            prototype. Any technical implementation of the new design solution
            was not included. The results and findings of the thesis work was
            not evaluated in a real CERO workshop. Thus, does not aspire to be
            the final design of the tool.
          </p>
        </Col>
      </Row>
      <Row>
        <Button href="https://kth.diva-portal.org/smash/record.jsf?dswid=-2112&pid=diva2%3A1459712&c=1&searchType=SIMPLE&language=sv&query=nahida+islam&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all">
          Thesis report
        </Button>
      </Row>
    </div>
  )
}

export default Disasteroid
