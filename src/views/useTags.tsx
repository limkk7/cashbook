import {useState} from 'react';
import {createId} from '../lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];

function useTags() {
  const [tags, setTags] = useState<{id: number; name: string}[]>(defaultTags);
  const findTag = (id: number) =>
    tags.find(tag => {
      return tag.id === id;
    });
  const findTagIndex = (id: number) => tags.findIndex(x => x.id === id);
  const updateTag = (id: number, tagName: string) => {
    setTags(tags.map(tag => (tag.id === id ? {id, name: tagName} : tag)));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  return {
    tags,
    setTags,
    updateTag,
    deleteTag,
    findTag,
    findTagIndex,
  };
}
export {useTags};
