import Layout from 'components/layout';
import { useState } from 'react';
import { CategorySection } from './money/categorySection';
import { NoteSection } from './money/noteSection';
import { NumberSection } from './money/numberSection';
import { TagsSection } from './money/tagsSection';

type Category = '-' | '+';

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
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
      <TagsSection value={selected.tags} onChange={(tags) => onChange({ tags })} />
      <NoteSection value={selected.note} onChange={(note) => onChange({ note })} />
      <CategorySection value={selected.category} onChange={(category) => onChange({ category })} />
      <NumberSection value={selected.amount} onChange={(amount) => onChange({ amount })} onOk={() => {}} />
    </Layout>
  );
}

export default Money;
