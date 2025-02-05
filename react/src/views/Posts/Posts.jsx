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
        setPosts([]);
        setLoading(true)
        let url = "/posts";
        if (category) {
            url += `?category_slug=${category}`;
        }
        axiosClient.get(url)
            .then(({data}) => {
                setLoading(false)
                setPosts(data.data)
                // console.log(data.data)
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
                    [...Array(6)].map((_, index) => (
                    <div className="animate-pulse p-4 rounded-xl border border-border1 bg-white shadow-sm" key={index}>
                        <div className="mt-4 h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
                        <div className="mt-4 h-4 w-3/4 bg-gray-200 rounded"></div>
                        <div className="ms-auto mt-2 h-7 w-7 bg-gray-200 rounded-full"></div>
                    </div>
                    ))
                )}
                {posts && posts.map(post => (
                    <PostCard
                        key={post.id}
                        post={post}
                    ></PostCard>
                ))}
                {!loading && posts.length === 0 && (
                    <div className="text-gray-500 text-center col-span-full py-6">
                        No posts found in this category
                    </div>
                )}
                {/* <div>No founded posts</div> */}
            </div>

          </div>
    )
  }
  
  export default Posts
  