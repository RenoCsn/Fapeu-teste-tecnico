import { Flex } from 'antd';
import './App.css';
import List from './Components/List';
import CreatePost from './Components/CreatePost';
import type { PostType } from './Utils/types';
import { useApi } from './Utils/useFetch';
import { useEffect } from 'react';

function App() {

//hook de fetch
const {getData, data: fetchData, loading: fetchLoading, error: fetchError, status: fetchStatus, statusText: fetchStatusText} = useApi(
  'https://jsonplaceholder.typicode.com/posts'
);

// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
useEffect(() => {
    getData()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

const handleOnSubmit = (newPost: PostType) => {
  console.log("clicou", newPost);
}

// adicionar no final da lista

//funções de crud

  return (
    <Flex gap="middle" vertical align='center' style={{padding: '16px'}}>
      <CreatePost onSubmit={handleOnSubmit}/>
      <List data={[...fetchData].reverse()} isLoading={fetchLoading}/>
    </Flex>
  );
}

export default App;
