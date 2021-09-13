import React from "react"
import HeroBackground from "../shared/HeroBackground"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import EventsList from "./EventsList"
const Events = () => {
  const { hero } = useStaticQuery(graphql`
    {
      hero: sanityOtherHeroImgs(title: { eq: "about" }) {
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  const words = {
    ar: {
      heroTitle1: "الفعاليّات والأنشطة",

      heroBody: `
      تلعب الفعاليّات والأنشطة دوراً بارزاً في بناء شخصيّة الطالب من خلال تنمية قدراته ومواهبه وتعديل سلوكه واحتياجاته النفسيّة.
          `,
    },
  }
  const { heroTitle1, heroBody } = words["ar"]
  return (
    <EventsStyle>
      <HeroBackground image={hero.image.asset.fluid}>
        <div className="container">
          <div className="heroTextHolder">
            <h3>{heroTitle1}</h3>
            <p>{heroBody}</p>
          </div>
        </div>
      </HeroBackground>
      <EventsList />
    </EventsStyle>
  )
}

export default Events
const EventsStyle = styled.div`
  .heroTextHolder {
    padding: 143px 0px;
    width: 400px;
    margin-left: auto;

    h3 {
      color: var(--darkGray);
      font-size: 3.5rem;
    }
    p {
      color: white;
      font-size: 2rem;
      text-align: justify;
    }
  }
  @media (max-width: 750px) {
    .heroTextHolder {
      display: none;
    }
  }
`
