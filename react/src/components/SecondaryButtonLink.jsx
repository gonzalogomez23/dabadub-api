import { Link } from 'react-router-dom';

const SecondaryButtonLink = ({ to, className = '', children, ...props }) => {
  return (
    <Link to={to} className={`${className} flex items-center gap-2 text-primary bg-white/20 border-2 border-primary hover:bg-primary hover:text-white rounded-lg transition-all font-semibold py-2 px-4`} {...props}>
        {children}
    </Link>
  )
}

export default SecondaryButtonLink