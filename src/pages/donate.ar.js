import React from "react"
import Layout from "../components/shared/Layout"
 import IndexPage from '../components/donate/IndexPage'
const DonatePage = ({ location }) => {

  return (
    <Layout location={location} lang="ar">
      <IndexPage lang="ar" />
    </Layout>
  )
}
 
export default DonatePage
