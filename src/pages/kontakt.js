import React from "react"
import { Text } from "@rebass/emotion"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Link from "../components/Link"

const SecondPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <Text as="h1">Kontakt</Text>
    <Text as="p">
      <strong>Telefon: </strong>
      <a href="tel: XXX XXX XXX">XXX XXX XXX</a>
    </Text>
    <Text as="p">
      <strong>Email: </strong>
      <a href="mailto: jfdach@gmail.com">jfdach@gmail.com</a>
    </Text>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
