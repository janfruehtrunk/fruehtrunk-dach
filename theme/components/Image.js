import Img from "next/image"
import styled from "@emotion/styled"
import { width, height, borderRadius } from "styled-system"

const Image = styled(Img)(
  ({ maxWidth }) => ({
    maxWidth: maxWidth || "100%",
    height: "auto",
    objectFit: "cover",
    objectPosition: "center"
  }),
  width,
  height,
  borderRadius
)

export default Image
