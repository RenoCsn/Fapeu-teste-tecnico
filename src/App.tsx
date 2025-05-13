import { Flex } from 'antd';
import './App.css';
import List from './Components/List';
import CreatePost from './Components/CreatePost';

function App() {

//hook de fetch

//funções de crud

  return (
    <Flex gap="middle" vertical align='center' style={{padding: '16px'}}>
      <CreatePost />
      <List />
    </Flex>
  );
}

export default App;
