import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Event from "./Event"
const EventsList = ({ lang }) => {
  const { events } = useStaticQuery(graphql`
    {
      events: allSanityEvent(sort: { fields: date, order: DESC }) {
        edges {
          node {
            mainImage {
              asset {
                fluid(maxWidth: 4000) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            date
            slug {
              current
            }
            title {
              ar
              en
            }
            shortDescription {
              ar
              en
            }
            location {
              ar
              en
            }
          }
        }
      }
    }
  `)
  return (
    <div className="container my-12">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {events.edges.map(e => (
          <Event data={e} key={e.node.slug.current} lang={lang} />
        ))}
      </div>
    </div>
  )
}

export default EventsList
