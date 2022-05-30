import React from "react"
import Layout from "../components/shared/Layout"
import IndexContent from "../components/events"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location} lang="ar">
      <SEO title="الفعاليات" lang="ar" />
      <IndexContent lang="ar" />
    </Layout>
  )
}

export default EventsPage
