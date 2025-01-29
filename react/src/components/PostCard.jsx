
import PrimaryButton from "components/PrimaryButton.jsx";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

const PostCard = ({post}) => {
  return (
    <Link  to={`/post/${post.slug}`} className="group flex flex-col max-w-sm bg-white/40 border border-border1 hover:border-secondary hover:bg-gradient-to-tl from-light1 to-transparent rounded-xl shadow-sm gap-3 p-6">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>
        <p className="font-normal text-gray-700">{post.description}</p>
        <div className="flex grow items-end justify-end">
          <span className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-primary text-primary group-hover:text-white group-hover:bg-secondary group-hover:border-secondary transition-all">
            <ArrowRightIcon className='size-4' />
          </span>
        </div>
    </Link>
  )
}

export default PostCard
