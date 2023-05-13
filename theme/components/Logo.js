import React from "react"
import { Box, Text } from "@rebass/emotion"
import InlineFlex from "./InlineFlex"
import Link from "./Link"
import Image from "../components/Image"

function Logo({ siteTitle, ...props }) {
  return (
    <InlineFlex
      flexDirection="column"
      alignItems="center"
      {...props}
      as={Link}
      href="/"
      color="black"
    >
      {false ? (
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
      ) : (
        <Image src="/logo.jpg" width="250" height="140" />
      )}
    </InlineFlex>
  )
}

Logo.defaultProps = {}

Logo.propTypes = {}

export default Logo
