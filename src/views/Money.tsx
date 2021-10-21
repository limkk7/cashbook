import Layout from 'components/Layout';
import {useRecords} from 'hooks/useRecords';
import {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';

type Category = '-' | '+';

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
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  const onSubmit = () => {
    addRecord(selected);
    alert('保存成功');
    setSelected(defaultFormData);
  };
  return (
    <Layout>
      <TagsSection value={selected.tagIds} onChange={tags => onChange({tagIds: tags})} />
      <NoteSection value={selected.note} onChange={note => onChange({note})} />
      <CategorySection value={selected.category} onChange={category => onChange({category})} />
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})} onOk={onSubmit} />
    </Layout>
  );
}

export default Money;
