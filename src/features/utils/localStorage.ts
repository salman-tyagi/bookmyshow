export type Key = 'email' | 'city' | 'token' | 'user';

export const setItem = (key: string, value: unknown): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

export const getItem = <T>(key: Key): T | undefined => {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : undefined;
  } catch (err) {
    console.log(err);
  }
};
