import { useEffect, useState } from 'react';

import { getItem, setItem } from '../../utils/localStorage';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return (item as T) || initialValue;
  });

  useEffect(() => {
    setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
