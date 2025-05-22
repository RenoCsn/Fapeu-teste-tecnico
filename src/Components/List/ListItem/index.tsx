import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex, Typography  } from "antd";
import type { PostType } from "../../../Utils/types";

const { Text, Title } = Typography;

const ListItem = ({userId, id, title, body}: PostType) => {
    return (
      <Flex gap="middle" vertical id={`${id}`} style={{ padding: 12, width: '100%' }}>
        <Flex justify="space-between" align="center"> 
          <Title level={4} style={{textTransform: "capitalize"}}>{title}</Title>
          <Flex gap="small" justify="flex-end">
            <Button icon={<EditOutlined />} />
            <Button icon={<DeleteOutlined />} />
          </Flex>
        </Flex>
        <Text>{body}</Text>
      </Flex>
    );
};

export default ListItem;
