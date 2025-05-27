import { List as AntdList, Flex } from 'antd'
import ListItem from './ListItem'
import type { PostType } from '../../Utils/types'

interface ListProps {
    data: PostType[]
    isLoading: boolean
    onDelete: (id: PostType['id']) => void
    onEdit: () => void
}

const List: React.FC<ListProps> = ({ data, isLoading, onDelete, onEdit }) => {
    return (
        <Flex gap="small" vertical style={{ maxWidth: '1400px' }}>
            <AntdList
                size="large"
                bordered
                loading={isLoading}
                dataSource={data}
                renderItem={(item: PostType) => (
                    <AntdList.Item>
                        <ListItem
                            post={item}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            key={item.id}
                        />
                    </AntdList.Item>
                )}
            />
        </Flex>
    )
}

export default List
