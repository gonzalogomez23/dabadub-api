import { Link } from 'react-router-dom';

const PrimaryButtonLink = ({ to, className = '', children, ...props }) => {
  return (
    <Link to={to} className={` ${className}flex items-center gap-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-all font-semibold py-2 px-4`} {...props}>
        {children}
    </Link>
  )
}

export default PrimaryButtonLink