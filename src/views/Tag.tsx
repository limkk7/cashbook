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
  const { findTag } = useTags()
  const { tagId } = useParams<Params>()
  const tag = findTag(parseInt(tagId))

  return (<Layout>
    <Topbar>
      <Icon name="icon-arrow-left-copy" />
      <span>编辑标签</span>
      <Icon name="" />
    </Topbar>
    <InputWrapper>
      <Input type="text" label="备注" placeholder="标签名" value={tag?.name} />
    </InputWrapper>
    <Space />
    <Space />
    <Space />
    <Space />
    <Center>
      <Button>删除标签</Button>
    </Center>
  </Layout>
  )
}
export { Tag }
