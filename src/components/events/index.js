import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import EventsList from "./EventsList"
import HeroContent from "../shared/HeroContent"
const Events = ({ lang }) => {
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
      heroTitle: "الفعاليّات والأنشطة",

      heroBody: `
      تلعب الفعاليّات والأنشطة دوراً بارزاً في بناء شخصيّة الطالب من خلال تنمية قدراته ومواهبه وتعديل سلوكه واحتياجاته النفسيّة.
          `,
    },
    en: {
      heroTitle: `Events and Activities`,
      heroBody: `Events and activities play a prominent role in building student's personality by developing his abilities and talents, modifying his behavior and psychological needs.`,
    },
  }
  const { heroTitle, heroBody } = words[lang]
  return (
    <>
      <HeroContent
        fluid={hero.image.asset.fluid}
        heroTitle={heroTitle}
        heroBody={heroBody}
        lang={lang}
      />
      <EventsList lang={lang} />
    </>
  )
}

export default Events
