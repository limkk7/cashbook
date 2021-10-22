import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type newRecordItem = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
};
type RecordItem = {
  createdAt: string;
} & newRecordItem;

// type newRecordItem = Omit<RecordItem, 'createAt'>

function useRecords() {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('record') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('record', JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: newRecordItem) => {
    console.log(newRecord);
    if (newRecord.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    const record = {...newRecord, createdAt: new Date().toISOString()};
    setRecords([...records, record]);
    return true;
  };

  return {
    records,
    addRecord,
  };
}
export {useRecords};
export type {RecordItem};
