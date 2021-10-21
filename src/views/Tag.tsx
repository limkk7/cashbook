import { useParams } from "react-router-dom"
import { useTags } from "./useTags"

type Params = {
  id: string
}

const Tag: React.FC = () => {
  const { tags } = useTags()
  const { id } = useParams<Params>()

  const tag = findTag(id)
  return (<>{tag.name}</>)
}
export { Tag }
