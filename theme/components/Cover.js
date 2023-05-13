import React from "react"
import Image from "./Image"
import Position from "./Position"

const Cover = props => (
  <Position position="relative" style={{ height: "100%" }} {...props}>
    <Image src="/rooftopview.jpg" fill />
  </Position>
)

Cover.defaultProps = {}

Cover.propTypes = {}

export default Cover
