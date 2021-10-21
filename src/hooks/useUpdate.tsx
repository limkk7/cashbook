import {useEffect, useState} from 'react';

// const useUpdate = (fn: () => void, dep: any[] = []) => {
//   const count = useRef(0);
//   useEffect(() => {
//     count.current += 1;
//   });
//   useEffect(() => {
//     console.log(count.current);
//     if (count.current > 1) {
//       fn && fn();
//     }
//   }, dep);
// };

const useUpdate = (fn: () => void, dep: any[]) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(x => x + 1);
  }, dep);
  useEffect(() => {
    if (count > 1) {
      fn && fn();
    }
  }, [count, fn]);
};

export {useUpdate};
