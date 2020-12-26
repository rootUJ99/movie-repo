import { useState, useEffect } from 'react';
export const useLocalStorage = (key, initialValue) => {
  const [localStore, setLocalStore] = useState(()=>{
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : initialValue;
  });
  const setValue = (value) => {
    setLocalStore(value);
    localStorage.setItem(key, JSON.stringify(value));
  }
  return [localStore, setValue];
}


export const useFetch = ({method ,url, body}) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});
  useEffect(()=> {
    (async() => {
      try {
        const raw = await fetch(url, {
          method,
          ...(body? {body: JSON.stringify(body)}: {}),
        });
        const data = await raw.toString();
        setResponse(data);
      } catch(error) {
        setError(error)
      }
    })();
  },[url, response, error]);
  return [response, error];
}