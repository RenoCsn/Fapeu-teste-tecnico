import { Flex } from 'antd'
import './App.css'
import List from './Components/List'
import CreatePost from './Components/CreatePost'
import type { PostType } from './Utils/types'
import { useApi } from './Utils/useFetch'
import { useEffect } from 'react'

function App() {
    const {
        getData,
        postData,
        deleteData,
        data: fetchData,
        loading: fetchLoading,
        error: fetchError,
        status: fetchStatus,
        statusText: fetchStatusText,
    } = useApi('https://jsonplaceholder.typicode.com/posts')

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

    return (
        <Flex gap="middle" vertical align="center" style={{ padding: '16px' }}>
            <CreatePost onSubmit={handleOnSubmit} />
            <List
                data={[...fetchData].reverse()}
                isLoading={fetchLoading}
                onDelete={handleDelete}
            />
        </Flex>
    )
}

export default App
