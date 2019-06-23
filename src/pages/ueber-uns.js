import React from "react"
import { Text } from "@rebass/emotion"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Image from "../components/Image"

const SecondPage = () => (
  <Layout>
    <SEO title="Über mich" />
    <Text as="h1">Über uns</Text>
    <Text as="h2" fontSize={1}>
      Frühtrunk Dach
    </Text>
    <Text as="p">
      ist ein junges, aufstrebendes und motiviertes Unternehmen, dessen Inhaber
      eine bereits 15 jährige Berufserfahrung in Berlin, Hamburg, Wien und
      London vorzuweisen hat.
    </Text>
    <Text as="h3" fontSize={1}>
      Inhaber
    </Text>
    <Text as="p">Jan Frühtrunk</Text>
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "portrait.png" }) {
            childImageSharp {
              fixed(width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Image fixed={data.file.childImageSharp.fixed} />}
    />
  </Layout>
)

export default SecondPage
