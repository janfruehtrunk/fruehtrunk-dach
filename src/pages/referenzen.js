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
    <StaticQuery
      query={graphql`
        query {
          placeholderImage1: file(relativePath: { eq: "referenz-1.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          placeholderImage2: file(relativePath: { eq: "referenz-2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          placeholderImage3: file(relativePath: { eq: "referenz-3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          placeholderImage4: file(relativePath: { eq: "referenz-4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Image fluid={data.placeholderImage1.childImageSharp.fluid} />
          <Text as="p">Dachrinnenreinigung</Text>
          <Image fluid={data.placeholderImage2.childImageSharp.fluid} />
          <Text as="p">Abdichtung mit Flüssigkunststoff</Text>
          <Image fluid={data.placeholderImage3.childImageSharp.fluid} />
          <Text as="p">Ausbesserung eines Turmdaches</Text>
          <Image fluid={data.placeholderImage4.childImageSharp.fluid} />
          <Text as="p">Terassensanierung</Text>
        </>
      )}
    />
  </Layout>
)

export default SecondPage
