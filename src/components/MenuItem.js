import styled from "@emotion/styled"
import Link from './Link';

const MenuItem = styled(Link)()

MenuItem.defaultProps = {
  as: Link,
  color: "white",
  p: 2,
  activeStyle: {
    textDecoration: "underline",
  },
}

export default MenuItem
