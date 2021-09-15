import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CallUs from "./CallUs"
import LeaveMessage from "./LeaveMessage"
import Location from "./Loaction"
import Donate from "../donate/IndexPage"
import HeroContent from "../shared/HeroContent"
const ContactPage = ({ lang }) => {
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
      heroTitle: "يسرّ هيئة تطوير التعليم",
      heroBody: `
      الإجابة على استفساراتكم والاستماع
      لآرائكم والرد على تعليقاتكم. 
          `,
    },
    en: {
      heroTitle: "Education Development Commission is pleased",
      heroBody: `
      to answer your inquiries, listen to your opinions and respond to your comments.
      `,
    },
  }
  const { heroTitle, heroBody } = words[lang]
  return (
    <>
      <HeroContent
        fluid={img.image.asset.fluid}
        heroTitle={heroTitle}
        heroBody={heroBody}
        lang={lang}
      />
      <CallUs lang={lang} />
      <LeaveMessage lang={lang} />
      <Location lang={lang} />
      <Donate lang={lang} />
    </>
  )
}

export default ContactPage
