import { List as AntdList, Flex } from 'antd';
import ListItem from './ListItem';
import type { DataType } from '../../Utils/types';

interface ListProps  {
  data: [],
  isLoading: boolean,
}

const List: React.FC<ListProps> = ({data, isLoading}) => {

    return (
      <Flex gap="small" vertical style={{maxWidth: '1400px'}}>
        <AntdList 
          size="large"
          bordered
          loading={isLoading}
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
