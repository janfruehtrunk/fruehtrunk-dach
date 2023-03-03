import React from "react"
import { Flex, Text } from "@rebass/emotion"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Leistungen" />
    <Text as="h1">Leistungen</Text>
    <Flex justifyContent="space-between">

      <Flex flexDirection="column">
        <Text as="p">
          Steildach <br />
          Flachdach<br />
          Fassade<br />
        </Text>
        <Text as="p">
          Neudeckungen<br />
          Dachsanierungen <br />
          Asbestsanierung
          Reparaturen von Dächern<br />
          Überprüfung und Wartung<br />
          Gründächer<br />
          Einbau von Dachfenster<br />
          Hitzeschutz<br />
          Sturmschaden<br />
          Abdichtungen<br />
          Wärmedämmung verlegen<br />
          Rinnenreinigung<br />
          <br />
        </Text>
      </Flex>

      <Flex marginRight="45px">
        <Text as="p">
          Schiefer<br />
          Eternit Faserzementplatten<br />
          Dachziegeln<br />
          Betondachstein
        </Text>
      </Flex>

    </Flex>
    <Text as="p">
      <strong>Gerne stehen wir für eine Beratung zur Verfügung</strong><br />
    </Text>
  </Layout>
)

export default SecondPage
