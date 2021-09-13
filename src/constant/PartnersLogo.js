import React from "react"

import styled from "styled-components"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const PartnersLogo = () => {
  const { part } = useStaticQuery(graphql`
    {
      part: allSanityPartners {
        nodes {
          logo {
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
              id
            }
          }
        }
      }
    }
  `)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 345,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }
  return (
    <Wraper>
      <Slider {...settings}>
        {part.nodes[0].logo.map(icon => (
          <div className="imgContainer" key={icon.asset.id}>
            <Img fluid={icon.asset.fluid} />
          </div>
        ))}
      </Slider>
    </Wraper>
  )
}

export default PartnersLogo

const Wraper = styled.div`
  text-align: center;
  .imgContainer {
    max-width: 150px;
  }
  @media (max-width: 700px) {
    .imgContainer {
      max-width: 150px;
    }
  }
`
