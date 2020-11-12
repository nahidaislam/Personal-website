import React from "react"
import { Col } from "react-bootstrap"

//Component
import Card from "./Card"

//Image Query
import Images from "../image"

const Cards = () => {
  //Extracting images from Images.js
  const { cero } = Images()
  const { djtable } = Images()
  const { disasteroid } = Images()
  const { viashare } = Images()
  const { parkout } = Images()
  const { sl } = Images()
  const { saveme } = Images()

  return (
    <div className="cards">
      <Col md={4} sm={6} className="p-3 my-project design">
        <Card
          imgsrc={cero.childImageSharp.fluid}
          title="CERO Simulation tool"
          alt="Cero simulation tool"
          link="/projects/cero"
          description="UX Design"
        />
      </Col>
      <Col md={4} sm={6} className="p-3 my-project game">
        <Card
          imgsrc={djtable.childImageSharp.fluid}
          title="DJTable"
          alt="DJTable"
          link="/projects/djtable"
          description="Tabletop game"
        />
      </Col>
      <Col md={4} sm={6} className="p-3 my-project game">
        <Card
          imgsrc={disasteroid.childImageSharp.fluid}
          title="Disasteroid"
          alt="Disasteroid"
          link="/projects/disasteroid"
          description="AR game"
        />
      </Col>
      <Col md={4} sm={6} className="p-3 my-project design">
        <Card
          imgsrc={viashare.childImageSharp.fluid}
          title="The ViaShare"
          alt="The ViaShare"
          link="/projects/viashare"
          description="Design"
        />
      </Col>
      <Col md={4} sm={6} className="p-3 my-project design">
        <Card
          imgsrc={parkout.childImageSharp.fluid}
          title="Parkout"
          alt="Parkout"
          link="/projects/parkout"
          description="Mobile application/ Design"
        />
      </Col>
      <Col md={4} sm={6} className="p-3 my-project design">
        <Card
          imgsrc={sl.childImageSharp.fluid}
          title="SL: Station Map"
          alt="SL: Station Map"
          link="/projects/sl"
          description="Design"
        />
      </Col>
      <Col md={4} sm={6} className="p-3 my-project game">
        <Card
          imgsrc={saveme.childImageSharp.fluid}
          title="SaveMe!"
          alt="SaveMe!"
          link="/projects/saveme"
          description="Web game"
        />
      </Col>
    </div>
  )
}

export default Cards
