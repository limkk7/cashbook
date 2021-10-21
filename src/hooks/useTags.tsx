import {useUpdate} from 'hooks/useUpdate';
import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';

function useTags() {
  const [tags, setTags] = useState<{id: number; name: string}[]>([]);

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tag') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tag', JSON.stringify(tags));
  }, [tags]);

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
  const addTag = () => {
    const tagName = window.prompt('新标签名称为');
    if (tagName !== null && tagName !== '') {
      const t = [...tags, {id: createId(), name: tagName}];
      setTags(t);
      console.log(t);
    }
  };
  return {
    tags,
    setTags,
    addTag,
    updateTag,
    deleteTag,
    findTag,
    findTagIndex,
  };
}
export {useTags};
