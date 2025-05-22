import { Flex } from 'antd';
import './App.css';
import List from './Components/List';
import CreatePost from './Components/CreatePost';
import type { PostType } from './Utils/types';
import { useApi } from './Utils/useFetch';
import { useEffect } from 'react';

function App() {

const {getData, postData, data: fetchData, loading: fetchLoading, error: fetchError, status: fetchStatus, statusText: fetchStatusText} = useApi(
  'https://jsonplaceholder.typicode.com/posts'
);

useEffect(() => {
  if(fetchData.length < 1){
    getData()
  }
  console.log("useEffect",);
  
}, [fetchData, getData])

const handleOnSubmit = (newPost: PostType) => {
  postData(newPost)
}

  return (
    <Flex gap="middle" vertical align='center' style={{padding: '16px'}}>
      <CreatePost onSubmit={handleOnSubmit}/>
      <List data={[...fetchData].reverse()} isLoading={fetchLoading}/>
    </Flex>
  );
}

export default App;
