import { Flex } from 'antd'
import './App.css'
import List from './Components/List'
import CreatePost from './Components/CreatePost'
import type { PostType } from './Utils/types'
import { useApi } from './Utils/useFetch'
import { useEffect, useState } from 'react'
import EditModal from './Components/EditModal'

function App() {
    const {
        getData,
        postData,
        editPostData,
        deleteData,
        data: fetchData,
        loading: fetchLoading,
        error: fetchError,
        status: fetchStatus,
        statusText: fetchStatusText,
    } = useApi('https://jsonplaceholder.typicode.com/posts')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditing, setIsEditing] = useState<PostType | undefined>(undefined)

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        getData()
    }, [])

    const handleOnSubmit = (newPost: PostType) => {
        postData(newPost)
    }

    const handleDelete = (postId: PostType['id']) => {
        deleteData(postId)
    }

    const handleEdit = (postId: PostType['id']) => {
        const postEditing = fetchData.find((post) => post.id === postId)
        setIsEditing(postEditing)
        setIsModalOpen(true)
    }

    const handleConfirm = (editPost: PostType) => {
        editPostData(editPost)

        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        setIsEditing(undefined)
    }

    return (
        <Flex gap="middle" vertical align="center" style={{ padding: '16px' }}>
            <CreatePost onSubmit={handleOnSubmit} />
            <List
                data={[...fetchData].reverse()}
                isLoading={fetchLoading}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
            {isEditing && (
                <EditModal
                    isModalOpen={isModalOpen}
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                    editPost={isEditing}
                />
            )}
        </Flex>
    )
}

export default App
