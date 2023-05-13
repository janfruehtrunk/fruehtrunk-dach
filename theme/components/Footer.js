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
        <Link mr={2} href="/impressum" color="blue">
          <Text fontSize={fontSize}>Impressum</Text>
        </Link>
      </Flex>
      <Text color="silver" textAlign="right" fontSize={fontSize}>© fruehtrunk-dach.at {new Date().getFullYear()}</Text>
    </Flex>
  )
}

Footer.defaultProps = {}

Footer.propTypes = {}

export default Footer
