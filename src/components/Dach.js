import React from "react"
import { css } from "emotion"

const Dach = ({ children, ...props }) => {
  return React.cloneElement(React.Children.only(children), {
    className: css({
      position: "relative",
      ":after": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 10,
        bottom: 0,
        left: 10,
        backgroundColor: "white",
        height: 2,
      },
    }),
    ...props,
  })
}

export default Dach
