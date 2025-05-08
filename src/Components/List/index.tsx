import { List as AntdList, Flex } from 'antd';
import ListItem from './ListItem';

interface DataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const data: DataType[] = [
{
userId: 1,
id: 1,
title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
userId: 1,
id: 2,
title: "qui est esse",
body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},]

const List: React.FC = () => {
    return (
      <Flex gap="small" vertical>
        <AntdList 
          size="large"
          bordered
          dataSource={data}
          renderItem={(item) => <AntdList.Item>
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
