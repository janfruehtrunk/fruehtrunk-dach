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
    <Text>
      Wir von Frühtrunk-Dach sind Ihr zuverlässiger Partner für Dachdeckerarbeiten,
      das sich durch unser junges, professionelles und 
      motiviertes Team auszeichnet.
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
