import React from "react"
import { Text } from "@rebass/emotion"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <Text as="h1">Kontakt</Text>
    <Text as="p">
      <strong>Telefon: </strong>
      <a href="tel: +49 1789 153 507">+49 1789 153 507</a>
    </Text>
    <Text as="p">
      <strong>Email: </strong>
      <a href="mailto: info@fruehtrunk-dach.de">info@fruehtrunk-dach.de</a>
    </Text>
  </Layout>
)

export default SecondPage
