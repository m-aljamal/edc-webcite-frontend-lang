import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Event from "./Event"
import { EventListStyle } from "../../styles/EventListStyle"
const EventsList = () => {
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
    <div className="container">
      <EventListStyle>
        {events.edges.map(e => (
          <Event data={e} key={e.node.slug.current} />
        ))}
      </EventListStyle>
    </div>
  )
}

export default EventsList
