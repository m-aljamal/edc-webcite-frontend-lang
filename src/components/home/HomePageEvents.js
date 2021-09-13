import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Event from "../events/Event"
import Title_no_back from "../shared/Title_no_back"

const EventsList = ({ lang }) => {
  const { events } = useStaticQuery(graphql`
    {
      events: allSanityEvent(sort: { fields: date, order: DESC }, limit: 3) {
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
    <div className="container md-font" style={{ marginTop: "50px" }}>
      <Title_no_back
        title={lang === "ar" ? `آخر الفعاليات` : "Latest events"}
      />
      <div className="grid grid-cols-3 gap-8 mt-8">
        {events.edges.map(
          (e, i) =>
            i < 3 && (
              <Event data={e} homePage key={e.node.slug.current} lang={lang} />
            )
        )}
      </div>
    </div>
  )
}

export default EventsList
