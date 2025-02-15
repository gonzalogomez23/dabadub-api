
import PrimaryButton from "components/PrimaryButton.jsx";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

const PostItem = ({post}) => {
  return (
    <Link  to={`/post/${post.slug}`} className="flex group overflow-hidden h-fit border-b-2 border-primary/15 last:border-none gap-3 px-4 py-6">
        <div className="flex flex-col grow max-h-80 gap-3">
            <h5 className="text-2xl font-semibold font-headings tracking-tight text-gray-900">{post.title}</h5>
            <p className="font-normal text-gray-700">{post.description}</p>
            <div className="flex">
            <span className="flex rounded-full items-center justify-center text-primary bg-secondary/10 font-headings px-3 py-1">
                Category name
            </span>
            </div>
        </div>
        {post.image && (
            <img src={post.image} alt={post.title} className="h-40 aspect-[4/3] object-cover rounded-lg" />
        )}
    </Link>
  )
}

export default PostItem
