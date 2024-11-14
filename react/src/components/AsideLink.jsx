
import { NavLink } from 'react-router-dom';
import activeLinkCircle from '../assets/circle.svg';

const AsideLink = ({ to, children, className = '', ...props }) => {
  return (
    <NavLink
        to={to}
        {...props}
        {...(!to && { onClick: (e) => e.preventDefault() })}
    >
        {({ isActive }) => (
            <div
                className={`${className} font-headings hover:bg-green-600/5 rounded-md transition-all font-medium text-lg flex items-center gap-4 px-4 py-3 ${isActive && to && 'text-primary'} ${!to && 'text-gray-500 opacity-50 cursor-default hover:bg-transparent'}`}
            >
                <div className='flex items-center gap-3'>
                    {children}
                </div>
                {isActive && to && <img src={activeLinkCircle} className='w-1'/>}
            </div>
        )}
    </NavLink>
  );
};

export default AsideLink;
