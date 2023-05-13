import { useStore, selectData } from "gspenst/data"
import MdxTheme from "gspenst/components/MdxTheme"

const Entry = () => {
  const { state } = useStore()
  const { resources } = selectData(state)
  const resource = resources.at(0)
  return (
    <>
      <h1>{resource.title}</h1>
      <MdxTheme content={resource.content} />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  )
}

export default Entry
