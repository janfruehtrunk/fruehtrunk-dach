import React from "react"
import { Box, Text } from "@rebass/emotion"
import { StaticQuery, graphql } from "gatsby"
import InlineFlex from "./InlineFlex"
import Link from "./Link"
import Image from "../components/Image"

function Logo({ siteTitle, ...props }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "logo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <InlineFlex
            flexDirection="column"
            alignItems="center"
            {...props}
            as={Link}
            to="/"
            color="black"
          >
            {
              true ?
                <>
                  <Box
                    as="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    viewBox="0 0 30 10"
                    pb={3}
                  >
                    <path
                      d="M 1 7 l 14 -5 l 14 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      fill="transparent"
                    />
                  </Box>
                  <Text fontSize={[2, 3, 3]} textAlign="center">
                    FRÜHTRUNK <br /> DACH
                  </Text>
                </>
                :
                <Image
                  fluid={data.logo.childImageSharp.fluid}
                  width="250px"
                />
            }
          </InlineFlex>
        </>
      )}
    />
  )
}

Logo.defaultProps = {}

Logo.propTypes = {}

export default Logo
