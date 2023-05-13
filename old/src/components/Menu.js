import React from "react"
import { Flex } from "@rebass/emotion"

const Menu = props => {
  return (
    <Flex
      as="nav"
      flexDirection="column"
      bg="near-black"
      alignItems="center"
      flexWrap={["wrap", "nowrap"]}
      width={[1, 'auto']}
      p={4}
      {...props}
    />
  )
}

Menu.defaultProps = {}

Menu.propTypes = {}

export default Menu
