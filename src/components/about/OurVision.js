import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OurVision = ({ lang }) => {
  const { slides } = useStaticQuery(graphql`
    {
      slides: sanityImagesSlide(title: { eq: "WhoWeArePage" }) {
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

  const data = [
    {
      text: {
        ar: ` تلتزم هيئة تطوير التعليم بتقديم تعليم شامل عالي الجودة للطلاب في أماكن
        الأزمات.`,
        en: ` Education Development Commission is committed to provide high-quality inclusive education to students in crisis places`,
      },

      img: slides.aboutPageSlide[0].asset.fluid,
      id: 1,
    },
  ]
  return (
    <div className="container my-8">
      <div>
        <h2 className="text-mainblue text-2xl font-semibold text-center">
          {lang === "ar" ? "رؤيتنا" : "Our Vision"}
        </h2>
        <div>
          {data.map(item => (
            <div
              key={item.id}
              className={`md:flex   gap-5 my-20  ${
                item.id % 2 === 0 ? "flex-row-reverse" : ""
              }  `}
            >
              <Img fluid={item.img} className=" md:w-1/2 rounded-md" />
              <p className=" md:w-2/3 text-xl text-gray-700 text-justify leading-10 ">
                {item.text[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurVision
