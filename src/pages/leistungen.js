import React from "react"
import { Text } from "@rebass/emotion"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Leistungen" />
    <Text as="h1">Leistungen</Text>
    <Text as="p">
     Steildach
     Flachdach
     Fassade
    </Text>
    <Text as="p">
     Neubau
     Umbau 
     Reparatur
     Dachüberprüfung
     Dachfenstereinbau
     Flachdachabdichtungen
     Wärmedämmung
    </Text>
    <Text as="p">
     Schiefer
     Eternit
     Ziegel
     Betondachstein
    </Text>
    <Text as="p">
     Gerne stehen wir für eine Beratung zur Verfügung.
    </Text>
  </Layout>
)

export default SecondPage
