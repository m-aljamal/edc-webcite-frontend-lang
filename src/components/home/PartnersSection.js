import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../shared/Background"
import PartnersLogo from "../../constant/PartnersLogo"

const PartnersSection = ({ partnerTitle }) => {
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
          <h3 className="text-center text py-4 text-mainblue font-bold text-3xl">
            {partnerTitle}
          </h3>
        )}
        <PartnersLogo />
      </Background>
    </div>
  )
}

export default PartnersSection
