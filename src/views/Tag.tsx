import { useTags } from "./useTags"
import { useParams } from "react-router-dom"
import Layout from "components/Layout"
import Icon from "components/Icon"
import { Button } from "components/Button"
import styled from "styled-components"
import { Input } from "components/Input"
import { Center } from "components/Center"
import { Space } from "components/Space"

type Params = {
  tagId: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background-color: #ffffff;
`
const InputWrapper = styled.div`
  background-color: #ffffff;
  padding: 0 16px;
  margin-top: 8px;
`

const Tag: React.FC = () => {
  const { findTag, updateTag, deleteTag } = useTags()
  const { tagId: idString } = useParams<Params>()
  const id = parseInt(idString)
  const tag = findTag(id)

  return (
    <Layout>
      <Topbar>
        <Icon name="icon-arrow-left-copy" />
        <span>编辑标签</span>
        <Icon name="" />
      </Topbar>
      {tag ? (
        <>
          <InputWrapper>
            <Input
              type="text"
              label="标签名"
              placeholder="请输入标签"
              value={tag.name}
              onChange={e => updateTag(id, e.target.value)}
            />
          </InputWrapper>
          <Space />
          <Space />
          <Center>
            <Button onClick={() => deleteTag(id)}>删除标签</Button>
          </Center>
        </>
      ) : (
        <>标签不存在</>
      )}
    </Layout>
  )
}
export { Tag }
