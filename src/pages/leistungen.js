import React from "react"
import { Text } from "@rebass/emotion"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Link from "../components/Link"

const SecondPage = () => (
  <Layout>
    <SEO title="Leistungen" />
    <Text as="h1">Leistungen</Text>
    <Text as="p">Text</Text>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
