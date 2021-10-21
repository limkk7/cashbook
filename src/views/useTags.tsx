import { useState } from 'react';
import { createId } from '../lib/createId';

const defaultTags = [
  { id: createId(), name: '衣' },
  { id: createId(), name: '食' },
  { id: createId(), name: '住' },
  { id: createId(), name: '行' }
]

function useTags() {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.find(tag => {
    return tag.id === id
  })

  return {
    tags,
    setTags,
    findTag
  };
}
export { useTags };
