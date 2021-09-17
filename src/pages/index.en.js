import React from "react"
import Layout from "../components/shared/Layout"
import IndexContent from "../components/home"
import SEO from "../components/shared/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location} lang="en">
      <SEO title="Home" lang="en" />
      <IndexContent lang="en" />
    </Layout>
  )
}

export default IndexPage
