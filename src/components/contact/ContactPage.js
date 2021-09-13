import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroBackground from "../shared/HeroBackground"
import styled from "styled-components"
import CallUs from "./CallUs"
import LeaveMessage from "./LeaveMessage"
import Location from "./Loaction"
import Donate from "../donate/IndexPage"
const ContactPage = () => {
  const { img } = useStaticQuery(graphql`
    {
      img: sanityOtherHeroImgs(title: { eq: "contact" }) {
        title
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
      heroTitle1: "يسرّ هيئة",
      heroTitle2: "تطوير التعليم",
      heroBody: `
      الإجابة على استفساراتكم والاستماع
      لآرائكم والرد على تعليقاتكم. 
          `,
    },
  }
  const { heroTitle1, heroTitle2, heroBody } = words["ar"]
  return (
    <Wraper>
      <HeroBackground image={img.image.asset.fluid}>
        <div className="container">
          <div className="heroTextHolder">
            <h3>
              {heroTitle1} {heroTitle2}
            </h3>
            <p>{heroBody}</p>
          </div>
        </div>
      </HeroBackground>
      <CallUs />
      <LeaveMessage />
      <Location />
      <Donate />
    </Wraper>
  )
}

export default ContactPage

const Wraper = styled.div`
  .heroTextHolder {
    padding: 143px 0px;
    width: 350px;
    margin-left: auto;

    h3 {
      color: var(--darkGray);
      font-size: 3.5rem;
    }
    p {
      color: white;
      font-size: 2rem;
    }
  }
  @media (max-width: 400px) {
    .heroTextHolder {
      display: none;
    }
  }
  @media (max-width: 750px) {
    .heroTextHolder {
      display: none;
    }
  }
`
