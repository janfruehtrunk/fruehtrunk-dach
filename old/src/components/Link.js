import { Box } from "@rebass/emotion"
import { Link as GastbyLink } from "gatsby"
import styled from "@emotion/styled"

const Link = styled(Box)({
  textDecoration: "none",
  ":hover": {
    textDecoration: "none",
  },
})

Link.defaultProps = {
  as: GastbyLink,
  color: "dark-blue",
}

export default Link
