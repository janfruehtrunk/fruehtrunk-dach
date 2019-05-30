import React from "react"
import { Text } from "@rebass/emotion"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Link from "../components/Link"
import Image from "../components/Image"

const SecondPage = () => (
  <Layout>
    <SEO title="Über mich" />
    <Text as="h1">Über mich</Text>
    <Text as="p">Text</Text>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "portrait.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Image fluid={data.placeholderImage.childImageSharp.fluid} width="300px" height="300px" />
      )}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
