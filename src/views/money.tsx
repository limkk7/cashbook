import Layout from 'components/layout';
import { CategorySection } from './money/categorySection';
import { NoteSection } from './money/noteSection';
import { NumberSection } from './money/numberSection';
import { TagsSection } from './money/tagsSection';

function Money() {
  return (
    <Layout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberSection />
    </Layout>
  );
}

export default Money;
