import React from "react"
import Layout from "../components/shared/Layout"
import SEO from "../components/shared/seo"
import OurMessage from "../components/about/OurMessage"

const our_message = ({ location }) => {
  return (
    <Layout location={location} lang="en">
      <SEO title="رسالتنا" lang="en" />
      <OurMessage lang="en" />
    </Layout>
  )
}

export default our_message
