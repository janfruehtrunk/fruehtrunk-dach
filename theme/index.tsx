import { ThemeProvider } from "@emotion/react"
import Layout from "./components/Layout"
import Entry from "./components/Entry";
import theme from "./theme"

const createLayout = () => {
  const Page = () => {
    // console.log("GspenstThemeLayoutProps", props)
    return (
      <ThemeProvider theme={theme}>
        <Layout isSubPage={false} padding={0}>
          <Entry />
        </Layout>
      </ThemeProvider>
    )
  }

  return Page
}

export default createLayout
