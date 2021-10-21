import styled from 'styled-components';
import {useTags} from 'hooks/useTags';

const Wrapper = styled.section`
  background-color: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    display: flex;
    flex-wrap: wrap;
    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      cursor: pointer;
      user-select: none;
      min-height: 24px;
      &.selected {
        background-color: #aeade3;
        color: #ffffff;
      }
    }
  }
  > button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333333;
    color: #666666;
    margin-top: 8px;
  }
`;

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
};

const TagsSection: React.FC<Props> = props => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => (selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '');
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => (
          <li key={tag.id} className={getClass(tag.id)} onClick={() => onToggleTag(tag.id)}>
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};
