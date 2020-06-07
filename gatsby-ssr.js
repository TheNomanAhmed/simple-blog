import React from "react"
import { GlobalProvider } from "./src/context/globalContext"
import { preToCodeBlock } from "mdx-utils"
import "./language-tabs.css"
import { MDXProvider } from "@mdx-js/react"
import { Code } from "./src/components"

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <GlobalProvider>{element}</GlobalProvider>
  </MDXProvider>
)
