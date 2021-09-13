import React from "react"
import Layout from "../components/shared/Layout"
import { Link } from "gatsby"
import SEO from "../components/shared/seo"

const NotFoundPage = ({ location }) => (
  <Layout location={location} lang="ar">
    <SEO title="404: Not found" />
    <div style={{ textAlign: "center", height: "225px" }}>
      <h2>هذه الصفحة غير موجودة</h2>
      <Link to="/">الرجوع الى الصفحة الرئيسية</Link>
    </div>
  </Layout>
)

export default NotFoundPage
