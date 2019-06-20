import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout isSubPage={false} padding={0}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
