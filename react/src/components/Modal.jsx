import { TrashIcon } from "@heroicons/react/24/outline"
import PrimaryButton from "components/PrimaryButton"

const Modal = ({children}) => {
  return (
    <div
        role='dialog'
        aria-labelledby='editTask'
        className='absolute w-screen h-screen bg-black/30 left-0 top-0 flex justify-center items-center z-50 p-12'
        // onMouseDown={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
        {/* <div className="w-full max-w-xl bg-white rounded-2xl flex flex-col my-8 p-4 ">
            Hola
        </div> */}
        <div className="w-full max-w-xl bg-gray-100 rounded-2xl text-center flex flex-col px-6 py-12 gap-8">
            {children}
        </div>
    </div>
  )
}

export default Modal
