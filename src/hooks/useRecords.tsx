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
  }, [records]);

  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord, createdAt: new Date().toISOString()};
    setRecords([...records, record]);
  };

  return {
    records,
    addRecord,
  };
}
export {useRecords};
