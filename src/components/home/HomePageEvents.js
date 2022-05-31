import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Event from "../events/Event"
import Title from "../shared/Title"

const EventsList = ({ lang }) => {
  const { events } = useStaticQuery(graphql`
    {
      events: allSanityEvent(sort: { fields: date, order: DESC }, limit: 2) {
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
    <div className="container md-font mt-10">
      <Title title={lang === "ar" ? `آخر الفعاليات` : "Latest Events"} />
      <div className="flex gap-8">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 mt-8 w-3/4">
          {events.edges.map(
            (e, i) =>
              i < 3 && (
                <div className="relative transition duration-150 ease-out hover:scale-110">
                  <Event
                    data={e}
                    homePage
                    key={e.node.slug.current}
                    lang={lang}
                  />
                </div>
              )
          )}
        </div>

        <div className="w-1/4">
          <a
            class="twitter-timeline"
            data-width="100%"
            data-height="100%"
            href="https://twitter.com/edcmission?ref_src=twsrc%5Etfw"
          >
            Tweets by edcmission
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </div>
  )
}

export default EventsList
