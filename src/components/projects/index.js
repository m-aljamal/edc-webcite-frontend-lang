import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Projects from "./Projects"
import WorkShops from "../about/WorkShops"
import HeroContent from "../shared/HeroContent"
const ProjectsPage = ({ lang }) => {
  const { hero } = useStaticQuery(graphql`
    {
      hero: sanityOtherHeroImgs(title: { eq: "projects" }) {
        name
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

      student: sanityBanners(title: { eq: "studentSeccess" }) {
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
      heroTitle: "تتعاون هيئة تطوير التعليم",
      heroBody: `
          مع المنظّمات والجمعيّات المحليّة
والدوليّة في العمل على مشاريع
تعليمّية. 
          `,
    },
    en: {
      heroTitle: "Education Development Commission cooperates",
      heroBody: `
      with local and international organizations and societies in working on educational projects.
      `,
    },
  }
  const { heroTitle, heroBody } = words[lang]
  return (
    <div>
      <HeroContent
        fluid={hero.image.asset.fluid}
        heroTitle={heroTitle}
        heroBody={heroBody}
        lang={lang}
      />

      <Projects lang={lang} />
      <WorkShops lang={lang} />
    </div>
  )
}

export default ProjectsPage
