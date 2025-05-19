export type PostType = {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

export type fetchResponse = {
    status: number;
    statusText: string;
    data: [];
    error: Error;
    loading: boolean;
  };