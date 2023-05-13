import React from "react"
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
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
          before1: file(relativePath: { eq: "1-before.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          after1: file(relativePath: { eq: "1-after.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          before2: file(relativePath: { eq: "2-before.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          after2: file(relativePath: { eq: "2-after.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          before3: file(relativePath: { eq: "3-before.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          after3: file(relativePath: { eq: "3-after.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>

          <Row flexDirection={['column', 'row']}>
            <Column width={1}>
          <ReactBeforeSliderComponent
            firstImage={{
              imageUrl: data.after1.childImageSharp.fluid.src
            }}
            secondImage={{
              imageUrl: data.before1.childImageSharp.fluid.src
            }}
              />
              <Text as="p">Dachsanierung Wohnhaus</Text>
            </Column>
          </Row>


          <Row flexDirection={['column', 'row']}>
            <Column width={1}>
          <ReactBeforeSliderComponent
            firstImage={{
              imageUrl: data.after2.childImageSharp.fluid.src
            }}
            secondImage={{
              imageUrl: data.before2.childImageSharp.fluid.src
            }}
              />
              <Text as="p">Neudeckung Kleingartenhaus</Text>
            </Column>
          </Row>

          <Row flexDirection={['column', 'row']}>
            <Column width={1}>
          <ReactBeforeSliderComponent
            firstImage={{
              imageUrl: data.after3.childImageSharp.fluid.src
            }}
            secondImage={{
              imageUrl: data.before3.childImageSharp.fluid.src
            }}
              />
              <Text as="p">Dachsanierung Presshaus</Text>
            </Column>
          </Row>
        </>
      )}
    />
  </Layout>
)

export default SecondPage
