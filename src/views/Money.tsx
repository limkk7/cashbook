import Layout from 'components/Layout';
import {useRecords} from 'hooks/useRecords';
import {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';

type Category = '-' | '+';

const CategoryWrapper = styled.div`
  background-color: #c4c4c4;
`;

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0,
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  type Selected = typeof selected;
  const {addRecord} = useRecords();
  const [output, _setOutput] = useState(selected.amount.toString());
  const onChange = (obj: Partial<Selected>) => {
    console.log('obj');
    console.log({
      ...obj,
    });
    console.log({
      ...selected,
    });
    setSelected({
      ...selected,
      ...obj,
    });
  };
  const onSubmit = () => {
    const success = addRecord(selected);
    if (success) {
      alert('保存成功');
      console.log(defaultFormData);
      setSelected({...defaultFormData});
      _setOutput('0');
    }
  };
  console.log(selected);
  return (
    <Layout
    //  scrollTop={99999}
    >
      <TagsSection value={selected.tagIds} onChange={tags => onChange({tagIds: tags})} />
      <NoteSection value={selected.note} onChange={note => onChange({note})} />
      <CategoryWrapper>
        <CategorySection value={selected.category} onChange={category => onChange({category})} />
      </CategoryWrapper>
      <NumberPadSection
        value={selected.amount}
        onChange={amount => onChange({amount})}
        onSubmit={onSubmit}
        _setOutput={newOutput => _setOutput(newOutput)}
        output={output}
      />
    </Layout>
  );
}

export default Money;
