import React from "react"
import Title from "../shared/Title"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectNumber from "./ProjectNumber"

const Achivments = ({ lang }) => {
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
    en: {
      title: "our achievements",
    },
  }

  const { title } = words[lang]
  return (
    <div className="py-20 relative">
      <Title title={title} />
      <div className="flex   mt-8">
        <div className="w-4/5 grid grid-cols-4 gap-5">
          <div
            className={`absolute w-1/3 bottom-0 transform ${
              lang === "en" ? "rotate-180" : ""
            } `}
          >
            <Img fluid={earth.image.asset.fluid} />
          </div>
          {ach.nodes.map((ach, i) => (
            <ProjectNumber data={ach} key={i} lang={lang} />
          ))}
        </div>
        <div className="w-1/5">
          <Img fluid={image.image.asset.fluid} />
        </div>
      </div>
    </div>
  )
}

export default Achivments
