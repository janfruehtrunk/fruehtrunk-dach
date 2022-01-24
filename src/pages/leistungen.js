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
          Neubau<br />
          Umbau <br />
          Reparatur<br />
          Dachüberprüfung<br />
          Dachfenstereinbau<br />
          Flachdachabdichtungen<br />
          Wärmedämmung<br />
          Reparatur von Blechdächer<br />
        </Text>
      </Flex>

      <Flex marginRight="35px">
        <Text as="p">
          Schiefer<br />
          Eternit<br />
          Ziegel<br />
          Betondachstein
        </Text>
      </Flex>

    </Flex>
    <Text as="p">
      Gerne stehen wir für eine Beratung zur Verfügung.
    </Text>
  </Layout>
)

export default SecondPage
