import Img from "gatsby-image"
import styled from "@emotion/styled"
import { height, borderRadius } from "styled-system"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = styled(Img)(
  {
    maxWidth: "100%",
    height: "auto",
  },
  height,
  borderRadius
)

export default Image
