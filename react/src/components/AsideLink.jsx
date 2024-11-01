import { Link } from 'react-router-dom';

const AsideLink = ({ to, children, className = '', ...props }) => {
  return (
    <Link to={to} className={`${className} font-headings hover:bg-gray-200/60 rounded-md transition-all font-medium text-lg px-3 py-2`} {...props}>
        {children}
    </Link>
  )
}

export default AsideLink