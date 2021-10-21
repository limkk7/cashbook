import Layout from 'components/Layout';
import { useState } from 'react';
import { CategorySection } from './Money/CategorySection';
import { NoteSection } from './Money/NoteSection';
import { NumberPadSection } from './Money/NumberPadSection';
import { TagsSection } from './Money/TagsSection';

type Category = '-' | '+';

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0,
  });
  type Selected = typeof selected;
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  return (
    <Layout>
      <TagsSection value={selected.tagIds} onChange={(tags) => onChange({ tagIds: tags })} />
      <NoteSection value={selected.note} onChange={(note) => onChange({ note })} />
      <CategorySection value={selected.category} onChange={(category) => onChange({ category })} />
      <NumberPadSection value={selected.amount} onChange={(amount) => onChange({ amount })} onOk={() => { }} />
    </Layout>
  );
}

export default Money;
