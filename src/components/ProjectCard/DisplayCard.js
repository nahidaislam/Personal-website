//CSS
import "./Card.css"

import React, { useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import { Power3, TweenMax } from "gsap"
import Isotope from "isotope-layout"
import styled from "styled-components"

//Components
import Cards from "./Cards"
import PageTitle from "../Elements/PageTitle/PageTitle"

//Style the buttons
const Buttons = styled.button`
  color: var(--inactive-color);
  background: transparent;
  border: none;
  margin-right: 3rem;
  text-transform: uppercase;
  font-size: 18px;

  ${({ active }) =>
    active &&
    `
    color: var(--active-color);
    
  `}
`

const DisplayCard = () => {
  //animation vars
  let projects = useRef(null)
  let title = useRef(null)
  let filterBtns = useRef(null)
  let projectCards = useRef(null)

  //The animation
  useEffect(() => {
    const pageTitle = title.children[0].children[0].children[0]
    const buttons = filterBtns
    const cards = projectCards

    //Remove initial flash
    TweenMax.to(projects, 0, { css: { visibility: "visible" } })

    TweenMax.staggerFrom(
      [pageTitle, buttons, cards],
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

  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null)
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*")

  // initialize an Isotope object with configs
  useEffect(() => {
    setIsotope(
      new Isotope(" .projects .grid", {
        itemSelector: ".my-project ",
      })
    )
  }, [])

  // handling filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` })
    }
  }, [isotope, filterKey])

  const types = [
    { name: "All", id: "*" },
    { name: "Design", id: "design" },
    { name: "Game", id: "game" },
  ]
  const [active, setActive] = useState(types[0].name)
  const ButtonGroup = () => {
    return (
      <div>
        {types.map(type => (
          <Buttons
            key={type.name}
            className="button"
            active={active === type.name}
            onClick={() => {
              setActive(type.name)
              setFilterKey(type.id)
            }}
          >
            {type.name}
          </Buttons>
        ))}
      </div>
    )
  }

  return (
    <section className="projects" ref={el => (projects = el)}>
      <Container
        className="projectCards content-container"
        ref={el => (title = el)}
      >
        <PageTitle title="Projects" />
        <div className="button-group text-center" ref={el => (filterBtns = el)}>
          <ButtonGroup />
        </div>
        <div
          className=" d-flex justify-content-start flex-wrap m-0 p-0 grid "
          ref={el => (projectCards = el)}
        >
          <Cards />
        </div>
      </Container>
    </section>
  )
}

export default DisplayCard
