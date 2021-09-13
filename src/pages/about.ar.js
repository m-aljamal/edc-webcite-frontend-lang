import React from "react"
import Layout from "../components/shared/Layout"
import AboutPage from "../components/about/aboutPage"
import SEO from "../components/shared/seo"
const About = ({ location }) => {
  return (
    <Layout location={location} lang="ar">
      <SEO title="من نحن" lang="ar" />
      <AboutPage lang="ar" />
    </Layout>
  )
}

export default About
