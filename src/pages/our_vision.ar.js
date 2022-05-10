import React from "react"
import Layout from "../components/shared/Layout"
import SEO from "../components/shared/seo"
import OurVision from "../components/about/OurVision"
const IndexPage = ({ location }) => {
  return (
    <Layout location={location} lang="ar">
      <SEO title="رؤيتنا" lang="ar" />
      <OurVision lang="ar" />
    </Layout>
  )
}

export default IndexPage
