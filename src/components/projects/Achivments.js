import React from "react"
import Title from "../shared/Title"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectNumber from "./ProjectNumber"

const Achivments = () => {
  const { ach, image, earth } = useStaticQuery(graphql`
    {
      ach: allSanityProjectsAchievements {
        nodes {
          name {
            ar
            en
          }
          number
          image {
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      image: sanityBanners(title: { eq: "achivBackground" }) {
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      earth: sanityBanners(title: { eq: "achErth" }) {
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
      title: `منجزاتنا:`,
    },
  }

  const { title } = words["ar"]
  return (
    <Wraper>
      <Title text={title} />
      <div className="achivmentHolder">
        <Img fluid={image.image.asset.fluid} className="image" />
        <div className="text">
          <Img fluid={earth.image.asset.fluid} className="earth" />
          {ach.nodes.map((ach, i) => (
            <ProjectNumber data={ach} key={i} />
          ))}
        </div>
      </div>
    </Wraper>
  )
}

export default Achivments
const Wraper = styled.section`
  padding: 50px 0;
  .achivmentHolder {
    margin-top: 40px;
    display: flex;
    flex-direction: row-reverse;
  }
  .text {
    position: relative;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
  .image {
    width: 20%;
  }
  .earth {
    position: absolute !important;
    width: 35%;
    right: 0;
  }
  @media (max-width: 700px) {
    .text {
      grid-template-columns: repeat(3, 1fr);
    }
    .earth {
      width: 50%;
      top: 20%;
    }
  }
  @media (max-width: 450px) {
    .text {
      grid-template-columns: repeat(2, 1fr);
    }
    .image {
      width: 40%;
    }
    .earth {
      display: none;
    }
  }
  @media (max-width: 350px) {
    .image {
      display: none;
    }
    .text {
      width: 100%;
    }
  }
`
