import React from "react"
import Layout from "../components/shared/Layout"
import AboutPage from "../components/about/aboutPage"
import SEO from "../components/shared/seo"
import WhoWeArePage from "../components/about/WhoWeArePage"
const About = ({ location }) => {
  return (
    <Layout location={location} lang="en">
      <SEO title="Who we are" lang="en" />
      <WhoWeArePage lang="en" />
    </Layout>
  )
}

export default About
