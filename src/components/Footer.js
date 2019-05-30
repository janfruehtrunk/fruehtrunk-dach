import React from "react"
import { Flex, Text } from "@rebass/emotion"
import Link from "./Link"

const fontSize = [0, 1]

function Footer(props) {
  return (
    <Flex
      as="footer"
      width={1}
      bg="near-black"
      color="white"
      p={2}
      justifyContent="space-between"
      {...props}
    >
      <Flex as="nav" flexWrap="wrap">
        <Link mr={2} to="/impressum">
          <Text fontSize={fontSize}>Impressum</Text>
        </Link>
        <Link mr={2} to="/datenschutz">
          <Text fontSize={fontSize}>Datenschutz</Text>
        </Link>
        <Link to="/agb">
          <Text fontSize={fontSize}>AGB</Text>
        </Link>
      </Flex>
      <Text color="silver" textAlign="right" fontSize={fontSize}>© frühtrunkdach.de {new Date().getFullYear()}</Text>
    </Flex>
  )
}

Footer.defaultProps = {}

Footer.propTypes = {}

export default Footer
