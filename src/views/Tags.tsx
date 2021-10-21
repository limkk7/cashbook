import { Button } from 'components/Button';
import Icon from 'components/Icon';
import Layout from 'components/Layout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTags } from './useTags';

const TagList = styled.ol`
  font-size: 16px;
  background-color: #ffffff;
  > li {
    line-height: 20px;
    border-bottom: 1px solid #d5d5d9;
    margin-left: 16px;
    /* margin-right: 16px; */
    >a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;


const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Space = styled.div`
  height: 32px;
`;

function Tags() {
  const { tags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="icon-arrow-right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Space />
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}
export default Tags;
