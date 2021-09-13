import React from "react"
import Img from "gatsby-image"
import CountUp from "react-countup"
import styled from "styled-components"
const ProjectNumber = ({ data }) => {
  return (
    <Wraper>
      <Img fluid={data.image.asset.fluid} className="icon" />
      <CountUp separator=" " delay={2} duration={20} end={data.number} />
      <p>{data.name.ar}</p>
    </Wraper>
  )
}

export default ProjectNumber

const Wraper = styled.div`
  text-align: center;
  .icon {
    width: 35px;
    margin: 0 auto;
    margin-bottom: 0.8rem;
  }
  span {
    font-size: 2rem;
    direction: ltr;
    font-weight: bold;
    color: var(--darkGray);
    display: flex;
    justify-content: center;
  }
  p {
    font-size: 1.7rem;
    text-align-last: center;
  }
  @media (max-width: 600px) {
    .icon {
      margin-bottom: 0;
    }
    span {
      font-size: 1.7rem;

      margin: 0;
    }
    p {
      font-size: 1.4rem;
    }
  }
`
