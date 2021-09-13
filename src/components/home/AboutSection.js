import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { aboutText } from "../../text/homePage"
import earth1 from "../../assist/images/earth1.png"
const AboutSection = ({ lang }) => {
  const { homePage1, homePage2 } = useStaticQuery(graphql`
    {
      homePage1: sanityBanners(title: { eq: "homePage1" }) {
        image {
          asset {
            fluid(maxWidth: 1500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      homePage2: sanityBanners(title: { eq: "homePage2" }) {
        image {
          asset {
            fluid(maxWidth: 1500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  const { text } = aboutText[lang]
  return (
    <div className=" relative">
      <div className="container mt-20  ">
        <div className="flex items-start mt-[30px] gap-10 justify-between ">
          <p
            className="w-1/2 text-justify text-xl  text-gray-800 leading-10"
            // data-sal-duration="800"
            // data-sal="slide-left"
            // data-sal-easing="easeOutQuad"
          >
            {text}
          </p>

          <div
            className=" relative w-1/2   "
            // data-sal-duration="800"
            // data-sal="slide-right"
            // data-sal-easing="easeOutQuad"
          >
            <Img
              fluid={homePage1.image.asset.fluid}
              loading="eager"
              className=" rounded-md"
              alt="image1"
            />

            <Img
              fluid={homePage2.image.asset.fluid}
              className={` absolute ${
                lang === "ar" ? "right-[-60px]" : "left-[-60px]"
              }  bottom-[120px] border-8 border-white  w-[300px]  rounded-md`}
              loading="eager"
              alt="image2"
            />
          </div>
        </div>
      </div>
      <img
        src={earth1}
        alt="earth"
        className={` absolute w-1/2  bottom-0 ${
          lang === "ar" ? "right-0" : "left-0"
        } `}
      />
    </div>
  )
}

export default AboutSection
