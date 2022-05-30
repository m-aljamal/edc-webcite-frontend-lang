import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import AboutVideo from "./AboutVideo"
import HeroBackground from "../shared/HeroBackground"
import PartnersSection from "../home/PartnersSection"
import Achivments from "../projects/Achivments"
import AboutUsSlider from "./AboutUsSlider"

const AboutPage = ({ lang }) => {
  const { hero, slides } = useStaticQuery(graphql`
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
      slides: sanityImagesSlide(title: { eq: "aboutSlides" }) {
        aboutPageSlide {
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
      text1: "تمكيــن..",
      text2: "اكتشاف..",
      text3: "ابتــكار..",
      visionTitle: "رؤيتنا",

      partnerTitle: `
      شركاؤنا:
      `,
      partnerBody: `
      تتعاون هيئةُ تطوير التعليم لأداء رسالتها مع جهات خيريّة وتعليميّة عدّة، مختصّة في العمليّة التعليميّة أو
مهتمّة بها. وتتوزّع هذه الجهات في بلاد مختلفة حول العالم، كالأردنّ وتركيا والبحرين وألمانيا وبريطانيا ، حيث
تشمل جامعات رائدة في مجال الأبحاث التعليميّة والتربويّة مثل جامعة "فرايبورغ" في ألمانيا وجامعة "لودفيغ
ماكسيميليان" في مدينة "ميونخ" في جنوب ألمانيا. كما تتعاون الهيئة مع مجموعات من المتطوّعين المختصيّن
والمهتّمين في مجال التّعليم وخاصّةً تعليم الأطفال في الأزمات حول العالم
      `,
    },
    en: {
      text1: "Empower..",
      text2: "Discover..",
      text3: "Innovate..",
      visionTitle: "Our Vision",
      partnerTitle: `
      Our Partners:
      `,
      partnerBody: `
      Education Development Commission cooperates to carry out its mission with several charitable and educational bodies, specialized in or interested in the educational process. These bodies are distributed in different countries around the world, such as Jordan, Turkey, Bahrain, Germany, and Britain. They include leading universities in the field of educational research, such as the University of Freiberg in Germany and the University of Ludwig Maximilian in the city of Munich in southern Germany. The commission also cooperates with groups of volunteers specialized and interested in the field of education, especially the education of children in crises around the world.
      `,
    },
  }

  const { text1, text2, text3, visionTitle, partnerTitle, partnerBody } = words[
    lang
  ]

  return (
    <div style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
      <HeroBackground image={hero.image.asset.fluid} className=" relative">
        <div className=" bg-mainblue opacity-30 absolute top-0 bottom-0 right-0 left-0"></div>
        <div className="flex absolute container top-0 bottom-0 items-center ">
          <div className="py-4 text-white font-bold container text-3xl ">
            <h3>{text1}</h3>
            <h3 className={`${lang === "ar" ? "mr-8" : "ml-8"}   py-8`}>
              {text2}
            </h3>
            <h3 className={`${lang === "ar" ? "mr-16" : "ml-16"}`}>{text3}</h3>
          </div>
        </div>
      </HeroBackground>

      <AboutVideo />

      <AboutUsSlider slides={slides} lang={lang} />

      <Achivments lang={lang} />
      <PartnersSection partnerTitle={partnerTitle} partnerBody={partnerBody} />
    </div>
  )
}

export default AboutPage
