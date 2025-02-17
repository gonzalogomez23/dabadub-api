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
            <div className="w-full flex items-center justify-center p-12">Loading...</div>
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
        <div className="">
            {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
            )}
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 p-12">
                {post.category &&
                    <span className="flex w-fit rounded-full items-center justify-center text-sm text-primary border border-primary/20 font-headings px-3 py-1">
                        {post.category.title}
                    </span>
                }
                <h2 className="font-headings text-primary text-4xl font-medium">{post.title}</h2>
                <p className="text-2xl font-serif text-zinc-700">{post.description}</p>
                <hr />
                <p>{post.content}</p>
            </div>
        </div>
    )
}

export default Post
