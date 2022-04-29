import React from "react"
import Layout from "../components/shared/Layout"
import SEO from "../components/shared/seo"
import WhoWeArePage from "../components/about/WhoWeArePage"
const IndexPage = ({ location }) => {
  return (
    <Layout location={location} lang="ar">
      <SEO title="من نحن" lang="ar" />
      <WhoWeArePage lang="ar" />
    </Layout>
  )
}

export default IndexPage
