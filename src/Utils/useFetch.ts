import { useEffect, useState } from 'react';

export type fetchResponse = {
    status: number;
    statusText: string;
    data: [];
    error: Error;
    loading: boolean;
  };

export const useGetApi = (url: string): fetchResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<[]>([]);
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
};