import { Link } from 'react-router-dom';

const PrimaryButton = ({ to, variant = 'primary', className = '', children, ...props }) => {
  const variantClasses = {
    primary: 'text-white bg-primary hover:bg-secondary',
    secondary: 'text-primary bg-white border border-primary/30 hover:bg-light1',
    danger: 'text-red-600 bg-red-100 border border-red-300 hover:bg-red-200',
  }
  const styleClasses = `rounded-full transition-all w-fit whitespace-nowrap flex items-center gap-2 py-2.5 px-5  ${className} ${variantClasses[variant]}`
  
  if (to){
    return (
      <Link to={to} className={styleClasses} {...props}>
          {children}
      </Link>
    )
  }

  return (
    <button type="button" className={styleClasses} {...props}>{children}</button>
  )
}

export default PrimaryButton
