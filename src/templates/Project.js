import React from "react"
import Layout from "../components/shared/Layout"
import { graphql } from "gatsby"
import ProjectPage from "../components/project"
import SEO from "../components/shared/seo"
const Project = ({ location, data: { project } }) => {
  return (
    <Layout location={location} lang="ar">
      <SEO title={project.title} lang="ar" />
      <ProjectPage data={project} />
    </Layout>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      _rawMaingoal
      _rawProjectDescription1
      _rawProjectDescription2
      _rawProjectIntro
      title {
        ar
        en
      }
      video
      projectName {
        ar
        en
      }
      videoPoster

      projectGoals {
        ar
        en
      }
      image {
        asset {
          fluid(maxWidth: 4000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
