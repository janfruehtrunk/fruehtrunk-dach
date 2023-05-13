import styled from "@emotion/styled"
import Link from "./Link"

const MenuItem = styled(Link)({
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
})

MenuItem.defaultProps = {
  as: Link,
  color: "white",
  p: 2,
}

export default MenuItem
