import React from "react"
import Layout from "../components/shared/Layout"
import { graphql } from "gatsby"

import SEO from "../components/shared/seo"
import EventPage from "../components/events/EventPage"
const Event = ({ location, data: { event }, pageContext }) => {
  const { lang } = pageContext
  return (
    <Layout location={location} lang={lang}>
      {/* <SEO title={event.title[lang]} lang={lang} /> */}
      <EventPage data={event} lang={lang} />
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
      shortDescription {
        ar
        en
      }
      panner {
        asset {
          fluid(maxWidth: 1000) {
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
