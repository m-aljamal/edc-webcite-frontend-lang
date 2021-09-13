import React from "react"
import Layout from "../components/shared/Layout"
 import IndexContent from '../components/home'
import SEO from "../components/shared/seo"
const IndexPage = ({ location }) => {

  return (
    <Layout location={location} lang="ar">
       <SEO  title="الرئيسية" lang="ar" />
      <IndexContent lang="ar" />
    </Layout>
  )
}
 
export default IndexPage
