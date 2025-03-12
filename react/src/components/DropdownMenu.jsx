import { useEffect, useRef, useState } from "react"

const DropdownMenu = ({ label, buttonIcon, children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef()

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    
    const handleClickOutside = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setIsOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    },[])


  return (
    <div className="p-2 relative"  ref={dropdownRef}>
        <button
            // type="submit"
            className="flex items-center gap-2 px-2 py-1"
            aria-label={`Close add-task mode`}
            onClick={toggleMenu}
        >
            {buttonIcon ?? buttonIcon}
            {label}
        </button>

        {/* Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95" */}
        {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-lg bg-white border shadow-sm focus:outline-none p-2" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="flex flex-col gap-2" role="none">
                    {children}
                </div>
            </div>
        )

        }
        </div>
  )
}

DropdownMenu.Item = ({children, className = '', parentMethod, ...props }) => {
    return (
        <a href="#" onClick={parentMethod} className={`${className} w-full flex gap-2 items-center hover:bg-gray-200/60 rounded p-2`} {...props}>
            {children}
        </a>
    )
        
}

export default DropdownMenu
