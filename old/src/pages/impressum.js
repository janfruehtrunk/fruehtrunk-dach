import React from "react"
import Layout from "../components/Layout"
import { Text } from "@rebass/emotion"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Impressum</h1>
    <Text as="p">
      <strong>Frühtrunk Dach</strong><br />
      Inh. Jan Frühtrunk<br />
      Franzensgasse 11/1<br />
      1050 Wien<br />
      UID: ATU77757303<br /><br />
      Mitglied der WKO Landesinnung Dachdecker, Glaser und Spengler<br />
      Gerichtsstand Wien<br />
    </Text>
  </Layout>
)

export default SecondPage
