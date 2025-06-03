import { useState } from 'react'
import type { PostType } from './types'

export const useApi = (url: string) => {
    const [status, setStatus] = useState<number>(0)
    const [statusText, setStatusText] = useState<string>('')
    const [data, setData] = useState<PostType[]>([])
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)

    const getData = async () => {
        setLoading(true)
        try {
            const apiResponse = await fetch(url)
            const json = await apiResponse.json()
            setStatus(apiResponse.status)
            setStatusText(apiResponse.statusText)
            setData(json)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    const postData = (newPost: PostType) => {
        setLoading(true)

        try {
            const post: PostType = {
                userId: 5,
                id: data[data.length - 1].id + 1 || 0 + 1,
                title: newPost.title,
                body: newPost.body,
            }
            setData([...data, post])
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const editPostData = (editPost: PostType) => {
        setLoading(true)

        try {
            const indexFind = data.findIndex((post) => editPost.id === post.id)
            const aux = [...data]
            aux.splice(indexFind, 1, editPost)
            setData(aux)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const deleteData = (postId: PostType['id']) => {
        const newData: PostType[] = data.filter((post) => post.id !== postId)
        setData(newData)
    }

    return {
        getData,
        postData,
        editPostData,
        deleteData,
        data,
        status,
        statusText,
        error,
        loading,
    }
}
