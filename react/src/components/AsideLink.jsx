import { Link } from 'react-router-dom';

const AsideLink = ({ to, children, className = '', ...props }) => {
  return (
    <Link to={to} className={`${className} p-3 hover:bg-gray-200/90 rounded-md transition-all font-semibold`} {...props}>
        {children}
    </Link>
  )
}

export default AsideLink