import React from "react"
import Layout from "../components/shared/Layout"
import { graphql } from "gatsby"

import SEO from "../components/shared/seo"
import SingleEvent from "../components/events/SingleEvent"
const Event = ({ location, data: { event } }) => {
  return (
    <Layout location={location} lang="ar">
      <SEO title={event.title} lang="ar" />
      <SingleEvent data={event} />
    </Layout>
  )
}

export default Event

export const query = graphql`
  query($slug: String!) {
    event: sanityEvent(slug: { current: { eq: $slug } }) {
      date
      _rawParagraph1
      _rawParagraph2
      _rawShortDescription
      location {
        ar
        en
      }
      panner {
        asset {
          fluid(maxWidth: 4000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      videoPoster {
        asset {
          url
        }
      }
      slug {
        current
      }
      title {
        ar
        en
      }
      video
      imageOfText {
        asset {
          fluid(maxWidth: 1500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      mainImage {
        asset {
          fluid(maxWidth: 1500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
