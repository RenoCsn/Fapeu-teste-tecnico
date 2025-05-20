import { useState } from 'react';

export const useApi = (url: string) => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<[]>([]);
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    console.log("❤️");
    
    try {
        const apiResponse = await fetch(url);
        const json = await apiResponse.json();
        setStatus(apiResponse.status);
        setStatusText(apiResponse.statusText);
        setData(json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
  };

  // criar postData



  return {getData, data, status, statusText, error, loading};
};