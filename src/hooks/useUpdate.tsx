import {useEffect, useRef} from 'react';

const useUpdate = (fn: () => void, dependency: any[] = []) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn && fn();
    }
  }, [dependency, fn]);
};

// const useUpdate = (fn: () => void, dependency: any[]) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setCount(x => x + 1);
//   }, [dependency]);
//   useEffect(() => {
//     if (count > 1) {
//       fn && fn();
//     }
//   }, [count, fn]);
// };

export {useUpdate};
