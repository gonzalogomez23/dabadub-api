import { Link } from 'react-router-dom';

const AsideLink = ({ to, children, className = '', ...props }) => {
  return (
    <Link to={to} className={`${className} font-headings hover:bg-green-600/5 rounded-md transition-all font-medium text-lg px-4 py-3`} {...props}>
        {children}
    </Link>
  )
}

export default AsideLink