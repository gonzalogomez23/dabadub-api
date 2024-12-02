import { Link } from 'react-router-dom';

const PrimaryButton = ({ to, variant = 'primary', className = '', children, ...props }) => {
  const variantClasses = {
    primary: 'text-white bg-primary hover:bg-secondary',
    secondary: 'text-primary bg-white/20 border-2 border-primary hover:bg-primary hover:text-white',
  }
  const styleClasses = `rounded-full transition-all font-semibold w-fit flex items-center gap-2 py-2.5 px-5  ${variantClasses[variant] || variantClasses['primary']}`
  
  if (to){
    return (
      <Link to={to} className={`${styleClasses} ${className}`} {...props}>
          {children}
      </Link>
    )
  }

  return (
    <button type="button" className={`${styleClasses} ${className}`} {...props}>{children}</button>
  )
}

export default PrimaryButton
