import React from "react"
import { Text, Flex, Box } from "@rebass/emotion"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Image from "../components/Image"

const Row = props => <Flex {...props} mx={-3} />

const Column = props => <Box {...props} px={3} flex="1 1 auto" />

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
          placeholderImage5: file(relativePath: { eq: "referenz-5.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          placeholderImage6: file(relativePath: { eq: "referenz-6.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          placeholderImage7: file(relativePath: { eq: "referenz-7.jpg" }) {
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
          <Row flexDirection={['column', 'row']}>
            <Column width={[1, 1/2]}>
              <Image
                fluid={data.placeholderImage1.childImageSharp.fluid}
                maxWidth="400px"
              />
              <Text as="p">Dachrinnenreinigung</Text>
            </Column>
            <Column width={[1, 1/2]}>
              <Image
                fluid={data.placeholderImage2.childImageSharp.fluid}
                maxWidth="400px"
              />
              <Text as="p">Eindeckung eines Turmdaches</Text>
            </Column>
          </Row>
          <Row flexDirection={['column', 'row']}>
            <Column width={[1, 1/2]}>
              <Image
                fluid={data.placeholderImage3.childImageSharp.fluid}
                maxWidth="400px"
              />
              <Text as="p">Abdichtung mit Flüssigkunststoff</Text>
            </Column>
            <Column width={[1, 1/2]}>
              <Image
                fluid={data.placeholderImage4.childImageSharp.fluid}
                maxWidth="400px"
              />
              <Text as="p">Terassensanierung</Text>
            </Column>
          </Row>
          <Row flexDirection={['column', 'row']}>
            <Column width={[1, 1/2]}>
              <Image
                fluid={data.placeholderImage5.childImageSharp.fluid}
                maxWidth="400px"
              />
            </Column>
            <Column width={[1, 1/2]}>
              <Image
                fluid={data.placeholderImage6.childImageSharp.fluid}
                maxWidth="400px"
              />
            </Column>
          </Row>
          <Row flexDirection={['column', 'row']}>
            <Column width={[1]}>
              <Text as="p">Dachsanierung</Text>
              <Image
                fluid={data.placeholderImage7.childImageSharp.fluid}
              />
            </Column>
          </Row>
        </>
      )}
    />
  </Layout>
)

export default SecondPage
