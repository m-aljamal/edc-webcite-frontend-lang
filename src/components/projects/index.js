import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import HeroBackground from "../shared/HeroBackground"
import Projects from "./Projects"
import WorkShops from "../about/WorkShops"
const ProjectsPage = () => {
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
      heroTitle1: "تتعاون هيئة",
      heroTitle2: "تطوير التعليم",
      heroBody: `
          مع المنظّمات والجمعيّات المحليّة
والدوليّة في العمل على مشاريع
تعليمّية. 
          `,
      title: `:قصص النجاح`,
      storyTitle: `تفوق الطالب أحمد في تعلم اللغة العربية`,
      storyBody: `
              تأسست مدرسة واجدو الطريق عام ٢٠١١ م لتوفير الخدمات التعليمية
            لطلاب المنطقة، بعد أن حالت ظروف الحرب في المنطقة بين الطلاب
            واستكمال تعليمهم. تأسست مدرسة واجدو الطريق عام ٢٠١١ م لتوفير
            الخدمات التعليمية لطلاب المنطقة، بعد أن حالت ظروف الحرب في
            المنطقة بين الطلاب واستكمال تعليمهم
              `,
    },
  }
  const {
    heroTitle1,
    heroTitle2,
    heroBody,
    title,
    storyTitle,
    storyBody,
  } = words["ar"]
  return (
    <Wraper>
      <HeroBackground image={hero.image.asset.fluid}>
        <div className="container">
          <div className="heroTextHolder">
            <h3>
              {heroTitle1} {heroTitle2}
            </h3>
            <p>{heroBody}</p>
          </div>
        </div>
      </HeroBackground>

      <Projects />
      <WorkShops />
    </Wraper>
  )
}

export default ProjectsPage
const Wraper = styled.section`
  .heroTextHolder {
    padding: 143px 0px;
    width: 380px;

    .heroTitle2 {
      margin: 10px 0;

      color: var(--blue);
    }
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
  @media (max-width: 600px) {
    .heroTextHolder {
      display: none;
    }
  }
`
