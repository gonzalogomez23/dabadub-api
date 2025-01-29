import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axiosClient from "/src/axios-client.js";
import PostCard from 'components/PostCard';
import PrimaryButton from "components/PrimaryButton.jsx";
import { PlusIcon } from '@heroicons/react/24/solid'

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { category } = useParams(); 

    const getPosts = () => {
        setLoading(true)
        let url = "/posts";
        if (category) {
            url += `?category_slug=${category}`;
        }
        axiosClient.get(url)
            .then(({data}) => {
                setLoading(false)
                setPosts(data.data)
                console.log(data.data)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getPosts();
    }, [category])

    return (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end py-4 px-2 border-b border-border1"> {/* bg-gradient-to-r from-light1 to-transparent border border-border1*/}
                <h1 className="text-4xl text-primary font-semibold font-headings px-2">Posts</h1>
                <PrimaryButton to="/posts/new">
                    <PlusIcon className="size-5"/>
                    Add new
                </PrimaryButton> 
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {loading && (
                    <div>Loading...</div>
                )}
                {posts.map(post => (
                    <PostCard
                    key={post.id}
                    post={post}
                ></PostCard>
                ))}
            </div>

          </div>
    )
  }
  
  export default Posts
  