import { List as AntdList, Flex } from 'antd';
import ListItem from './ListItem';
import type { DataType } from '../../Utils/types';
import { useEffect, useState } from 'react';

interface ListProps  {
  data: [],
  isLoading: boolean,
}

const List: React.FC<ListProps> = ({data, isLoading}) => {

// const [response, setResponse] = useState([]);
// const [error, setError] = useState("");
// const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
    
//     const fetchData = async () => {
//       try{

//       setIsLoading(true)
//       const dataFetch = await fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json());
//       setResponse(dataFetch);
//       // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//       } catch (error: any) {
//         setError(error.message)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchData();

//   }, []);

    return (
      <Flex gap="small" vertical style={{maxWidth: '1400px'}}>
        <AntdList 
          size="large"
          bordered
          loading={isLoading}
          // dataSource={response}
          dataSource={data}
          renderItem={(item: DataType) => <AntdList.Item>
            <ListItem 
              userId= {item.userId} 
              id={item.id} 
              title={item.title}
              body={item.body} 
            />
          </AntdList.Item>
          }
        />
      </Flex>
    );
};

export default List;
