import React from "react"
import Layout from "../components/shared/Layout"
import IndexContent from "../components/events"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location} lang="en">
      <SEO title="Events" lang="en" />
      <IndexContent lang="en" />
    </Layout>
  )
}

export default EventsPage
