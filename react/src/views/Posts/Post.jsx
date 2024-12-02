import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axiosClient from "../../axios-client"

const Post = () => {

    const {slug} = useParams()
    const [loading, setLoading] = useState(false)

    const [post, setPost] = useState(null);

    if (slug) {
        useEffect(() => {
            setLoading(true)
            axiosClient.get(`/posts/${slug}`)
                .then(({data}) => {
                    setLoading(false)
                    setPost(data.data)
                })
                .catch(() => {
                    setLoading(false)
                })
                .finally(() => {
                    setLoading(false);
                  });
        }, [])
    }

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    if(!post){
        return(
            <>
                <div>Post not found</div>
            </>
        )
    }

    return (
        <div className="flex flex-col gap-6 p-12">
            <h2 className="text-4xl font-bold">{post.title}</h2>
            <p className="">{post.description}</p>
            <p className="">{post.content}</p>
        </div>
    )
}

export default Post
