import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { aboutText } from "../../constant/homePage"
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
      <div className="container sm:mt-20 mt-10  ">
        <div className="sm:flex items-start mt-[30px] gap-10 justify-between ">
          <p
            className="sm:w-1/2 text-justify text-xl  text-gray-800 leading-10 pb-5"
            // data-sal-duration="800"
            // data-sal="slide-left"
            // data-sal-easing="easeOutQuad"
          >
            {text}
          </p>

          <div
            className=" relative sm:w-1/2"
            // data-sal-duration="800"
            // data-sal="slide-right"
            // data-sal-easing="easeOutQuad"
          >
            <Img
              fluid={homePage1.image.asset.fluid}
              loading="eager"
              className=" rounded-md mb-8 sm:mb-0"
              alt="image1"
            />

            <Img
              fluid={homePage2.image.asset.fluid}
              className={` md:absolute  hidden sm:block ${
                lang === "ar" ? " xl:right-[-80px] " : "xl:left-[-60px]"
              }  lg:bottom-[120px] md:bottom-[30px] bottom-[-30px]    md:border-8 border-white  md:w-[300px]  rounded-md`}
              loading="eager"
              alt="image2"
            />
          </div>
        </div>
      </div>
      <img
        src={earth1}
        alt="earth"
        style={{ transform: lang === "en" ? "rotateY(180deg)" : "" }}
        className={` hidden sm:block absolute w-1/2  bottom-0 	 ${
          lang === "ar" ? "right-0" : "left-0"
        } `}
      />
    </div>
  )
}

export default AboutSection
