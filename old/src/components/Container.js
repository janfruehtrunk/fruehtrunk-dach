import { Box } from "@rebass/emotion"
import styled from "@emotion/styled"

const Container = styled(Box)({
  maxWidth: '768px'
})

Container.defaultProps = {
  mx: 'auto'
}

export default Container
