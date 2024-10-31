import { Link } from 'react-router-dom';

const ButtonLink = ({ to, className = '', children, ...props }) => {
  return (
    <Link to={to} className={`${className} flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg transition-all font-semibold py-2 px-4`} {...props}>
        {children}
    </Link>
  )
}

export default ButtonLink