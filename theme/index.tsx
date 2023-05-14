import { ThemeProvider } from "@emotion/react"
import MdxTheme from "gspenst/components/MdxTheme"
import { useStore, selectData } from "gspenst/data"
import Layout from "./components/Layout"
import theme from "./theme"

const createLayout = () => {
  // console.log("GspenstThemeLayoutProps", props)
  const Page = () => {
    const { state } = useStore()
    const { resources } = selectData(state)
    const resource = resources.at(0)
    return (
      <ThemeProvider theme={theme}>
        <Layout isSubPage={!state.context.includes("index")}>
          <MdxTheme content={resource.content} />
        </Layout>
      </ThemeProvider>
    )
  }

  return Page
}

export default createLayout
