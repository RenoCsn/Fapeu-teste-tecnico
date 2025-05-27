import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Flex, Typography } from 'antd'
import type { PostType } from '../../../Utils/types'

const { Text, Title } = Typography

interface PostItemProps {
    post: PostType
    onDelete: (id: PostType['id']) => void
    onEdit: () => void
    // onEdit: (post: PostType)
}

const ListItem = ({ post, onDelete, onEdit }: PostItemProps) => {
    return (
        <Flex
            gap="middle"
            vertical
            id={`${post.id}`}
            style={{ padding: 12, width: '100%' }}
        >
            <Flex justify="space-between" align="center">
                <Title level={4} style={{ textTransform: 'capitalize' }}>
                    {post.title}
                </Title>
                <Flex gap="small" justify="flex-end">
                    <Button icon={<EditOutlined />} onClick={() => onEdit()} />
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => onDelete(post.id)}
                    />
                </Flex>
            </Flex>
            <Text>{post.body}</Text>
        </Flex>
    )
}

export default ListItem
