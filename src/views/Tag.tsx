import { useTags } from "./useTags"
import { useParams } from "react-router-dom"
import Layout from "components/Layout"

type Params = {
  tagId: string
}

const Tag: React.FC = () => {
  const { findTag } = useTags()
  const { tagId } = useParams<Params>()

  const tag = findTag(parseInt(tagId))
  return (<Layout>
    <div>{tag && tag.name}</div>
  </Layout>
  )
}
export { Tag }
