/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "@emotion/react"
import { Box, Flex } from "@rebass/emotion"

import theme from "../theme"
import Container from "./Container"
import Header from "./Header"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children, isSubPage = true, padding = 3 }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Container
          as={Flex}
          style={{ minHeight: "100vh" }}
          flexDirection="column"
        >
          <Header
            siteTitle={data.site.siteMetadata.title}
            isSubPage={isSubPage}
            flex={!isSubPage && "1 0 auto"}
          />
          <Box as="main" flex={isSubPage && "1 0 auto"} p={padding}>
            {children}
          </Box>
          <Footer />
        </Container>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
