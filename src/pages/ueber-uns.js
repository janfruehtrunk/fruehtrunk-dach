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
      <Text as="p">Frühtrunk-Dach ist Ihr Partner, wenn es um das Dach geht.</Text>
      Dachdeckermeister und Spengler Jan Frühtrunk zeichnet sich mit
      über 15 Jahren Berufserfahrung in England, Deutschland und Österreich
      aus. Ob Einfamilienhaus, Villa, Zinshaus oder Kirche - Frühtrunk Dach bringt die nötige Erfahrung mit
     .
    </Text>
    <Text as="h3" fontSize={1}></Text>
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
      render={(data) => <Image fixed={data.file.childImageSharp.fixed} />}
    />
  </Layout>
)

export default SecondPage
