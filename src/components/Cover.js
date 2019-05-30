import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "./Image"
import Position from "./Position"

const Cover = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "rooftopview.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Position position="relative" style={{ height: '100%' }} {...props}>
        <Image
          fluid={data.placeholderImage.childImageSharp.fluid}
          height="100%"
        />
      </Position>
    )}
  />
)

Cover.defaultProps = {}

Cover.propTypes = {}

export default Cover
