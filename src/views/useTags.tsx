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
  const findTagIndex = (id: number) => tags.findIndex((x) => x.id === id)
  const updateTag = (id: number, tagName: string) => {
    const index = findTagIndex(id)
    if (index > -1) {
      const newTag = [...tags]
      newTag.splice(index, 1, { id: id, name: tagName })
      setTags(newTag)
    }
  }
  const deleteTag = (id: number) => {
    const index = findTagIndex(id)
    const newTag = [...tags]
    newTag.splice(index, 1)
    setTags(newTag)
  }
  return {
    tags,
    setTags,
    updateTag,
    deleteTag,
    findTag,
    findTagIndex
  };
}
export { useTags };
