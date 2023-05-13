/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Box, Flex } from "@rebass/emotion"
import Head from "next/head"
import { useStore, selectData } from "gspenst/data"

import Container from "./Container"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({
  children,
  isSubPage = true,
  padding = 3,
}) => {
  const { state } = useStore()
  const { resources } = selectData(state)
  const resource = resources.at(0)
  const title = resource?.title
  return (
    <Container as={Flex} style={{ minHeight: "100vh" }} flexDirection="column">
      <Head>
        <title>{title}</title>
      </Head>
      <Header flex={!isSubPage && "1 0 auto"} />
      <Box as="main" flex={isSubPage && "1 0 auto"} p={padding}>
        {children}
      </Box>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
