import { Box } from "@rebass/emotion"
import NextLink from "next/link"
import styled from "@emotion/styled"

const Link = styled(Box)()

Link.defaultProps = {
  as: NextLink,
  color: "dark-blue",
}

export default Link
