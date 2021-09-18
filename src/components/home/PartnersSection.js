import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../shared/Background"
import PartnersLogo from "../../constant/PartnersLogo"

const PartnersSection = ({ partnerTitle, ...props }) => {
  const { banner } = useStaticQuery(graphql`
    {
      banner: sanityBanners(title: { eq: "partners" }) {
        id
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
  return (
    <div className="mt-8">
      <Background image={banner.image.asset.fluid}>
        {partnerTitle && (
          <h3 className="text-center text py-4 text-mainblue font-bold text-3xl ">
            {partnerTitle}
          </h3>
        )}
        {props.partnerBody && (
          <p className="container my-3 leading-6 text-lg text-gray-800 text-justify">
            {props.partnerBody}
          </p>
        )}
        <div className="py-5">
          <PartnersLogo />
        </div>
      </Background>
    </div>
  )
}

export default PartnersSection
