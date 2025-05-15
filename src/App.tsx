import { Flex } from 'antd';
import './App.css';
import List from './Components/List';
import CreatePost from './Components/CreatePost';
import { type fetchResponse, useGetApi } from './Utils/useFetch';

function App() {

//hook de fetch
const fetched: fetchResponse = useGetApi(
  'https://jsonplaceholder.typicode.com/posts'
);

//funções de crud

  return (
    <Flex gap="middle" vertical align='center' style={{padding: '16px'}}>
      <CreatePost />
      <List data={fetched.data} isLoading={fetched.loading}/>
    </Flex>
  );
}

export default App;
