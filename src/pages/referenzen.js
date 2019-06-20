import React from "react"
import { Text } from "@rebass/emotion"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Image from "../components/Image"

const SecondPage = () => (
  <Layout>
    <SEO title="Referenzen" />
    <Text as="h1">Referenzen</Text>
    <Text as="p">
      Dachrinnenreinigung
    </Text>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "referenz-1.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Image fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
    <Text as="p">
      Abdichtung mit Flüssigkunststoff
    </Text>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "referenz-3.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Image fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
    <Text as="p">
      Ausbesserung eines Turmdaches
    </Text>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "referenz-2.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Image fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
    <Text as="p">
      Terassensanierung 
    </Text>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "referenz-4.JPG" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Image fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
  </Layout>
)

export default SecondPage
