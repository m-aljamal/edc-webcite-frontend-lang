import React from "react"
import ProjectsPage from "../components/projects"
import Layout from "../components/shared/Layout"
import SEO from "../components/shared/seo"
const ProjectEnglish = ({ location }) => {
  return (
    <Layout location={location} lang="en">
      <SEO title="Projects" lang="en" />
      <ProjectsPage lang="en" />
    </Layout>
  )
}

export default ProjectEnglish
