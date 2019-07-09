import PropTypes from "prop-types"
import React from "react"
import { Flex, Text } from "@rebass/emotion"
import Cover from "./Cover"
import Logo from "./Logo"
import Position from "./Position"
import Dach from "./Dach"
import Menu from "./Menu"
import MenuItem from "./MenuItem"
import Instagram from "./Instagram"
import Link from "./Link"

const Header = ({ siteTitle, isSubPage, ...props }) => (
  <Dach {...props}>
    <Position position="relative" as="header">
      <Position position="absolute" top={0} left={0} bottom={0} right={0}>
        <Cover />
      </Position>
      <Flex
        as={Position}
        position="relative"
        alignItems="flex-start"
        p={3}
        style={{ height: "100%" }}
        justifyContent="space-between"
        flexDirection={["column", "row"]}
      >
        <Dach>
          <Menu
            justifyContent="space-around"
            order={[2, 1]}
            mb={4}
            flexDirection={["row", "column"]}
          >
            <MenuItem to="/ueber-uns/">Über uns</MenuItem>
            <MenuItem to="/leistungen/">Leistungen</MenuItem>
            <MenuItem to="/referenzen/">Referenzen</MenuItem>
            <MenuItem to="/kontakt/">Kontakt</MenuItem>
          </Menu>
        </Dach>
        <Logo
          bg="white-50"
          px={4}
          py={3}
          mb={4}
          alignSelf={["center", "flex-start"]}
          order={[1, 2]}
        />
        <Link
          as="a"
          href="https://www.instagram.com/vonobengesehen/"
          target="_blank"
          alignSelf="flex-end"
          mt="auto"
          order={3}
        >
          <Text color="white" fontSize={[0, 1]} as={Flex} alignItems="center">
            <Instagram width={[20, 24]} pr={1} /> vonobengesehen
          </Text>
        </Link>
      </Flex>
    </Position>
  </Dach>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
