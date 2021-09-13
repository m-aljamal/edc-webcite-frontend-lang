import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Progress from "./Progress"
import Img from "gatsby-image"
const ProjectProgress = ({ data }) => {
  const { img } = useStaticQuery(graphql`
    {
      img: sanityBanners(title: { eq: "narrow" }) {
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Img fluid={img.image.asset.fluid} className="imagenarro" />
      <div className="progressHolder">
        <Progress data={data[0]} />
        <Progress data={data[1]} reverse reverseColor />
        <Progress data={data[2]} reverseColor flexEnd />
        <Progress data={data[3]} reverse flexEnd />
        <Progress data={data[4]} />
        <Progress data={data[5]} reverse reverseColor />
      </div>
    </Wrapper>
  )
}

export default ProjectProgress

const Wrapper = styled.div`
  padding: 4rem 0;
  position: relative;
  .imagenarro {
    max-width: 85%;

    margin: 0 auto;
  }
  .progressHolder {
    position: absolute;
    top: 250px;
    width: 100%;
  }
  @media (max-width: 1250px) {
    .imagenarro {
      max-width: 95%;
    }
  }
  @media (max-width: 1115px) {
    .imagenarro {
      max-width: 100%;
    }
  }
  @media (max-width: 1000px) {
     
    .imagenarro {
      display: none;
    }
    .progressHolder {
    position: relative;
    top:0;
     
  }
  }
  @media (max-width:600px){
    padding:0;
  }
`
