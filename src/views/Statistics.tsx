import Layout from 'components/Layout';
import {RecordItem, useRecords} from 'hooks/useRecords';
import {useTags} from 'hooks/useTags';
import {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background-color: #ffffff;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getTagName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);
  const hash: {[index: string]: RecordItem[]} = {};
  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => (a[0] < b[0] ? 1 : -1));
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={category => setCategory(category)} />
      </CategoryWrapper>
      {array.map(([date, records]) => (
        <div key={date}>
          <Header>{date}</Header>
          <div>
            {records.map(r => {
              return (
                <Item key={r.createdAt}>
                  <div className="tags">
                    {r.tagIds.map(tagId => (
                      <span key={tagId}>{getTagName(tagId)}</span>
                    ))}
                  </div>
                  <div className="note">{r.note}</div>
                  <div className="amount">￥{r.amount}</div>
                </Item>
              );
            })}
          </div>
        </div>
      ))}
    </Layout>
  );
}
export default Statistics;
