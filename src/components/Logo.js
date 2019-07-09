import React from "react"
import { Box, Text } from "@rebass/emotion"
import InlineFlex from "./InlineFlex"
import Link from "./Link"

function Logo({ siteTitle, ...props }) {
  return (
    <InlineFlex
      flexDirection="column"
      alignItems="center"
      {...props}
      as={Link}
      to="/"
      color="black"
    >
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
    </InlineFlex>
  )
}

Logo.defaultProps = {}

Logo.propTypes = {}

export default Logo
