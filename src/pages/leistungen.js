import React from "react"
import { Text } from "@rebass/emotion"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Leistungen" />
    <Text as="h1">Leistungen</Text>
    <Text as="p">
      Unser Fachgebiet sind Reperaturen und Wartungen aller Dächer,
      Bauklempnerreien und Holzkonstruktionen am Dach.
    </Text>
    <Text as="p">
      Profitieren Sie von einem Komplettservice, mit einer regelmäßiger Wartung
      und Rinnenreinigung für Ihre Objekte im ganzen Bundesgebiet.
    </Text>
    <Text as="p">
      Gerne stehen wir für eine Beratung zur verfügung.
    </Text>

  </Layout>
)

export default SecondPage
