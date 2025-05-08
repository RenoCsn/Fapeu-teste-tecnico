import { Flex, Typography  } from "antd";

interface ListItemProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const { Text, Title } = Typography;

const ListItem = ({userId, id, title, body}: ListItemProps) => {
    return (
      <Flex gap="small" vertical id={`${id}`}>
        <Title level={4}>{title}</Title>
        <Text>{body}</Text>
      </Flex>
    );
};

export default ListItem;
