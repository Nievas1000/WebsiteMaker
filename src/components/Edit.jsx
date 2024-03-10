import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi'
import { MdOutlineCancel } from 'react-icons/md'

export const Edit = ({ setIsSelected, isSelected, selectNavbar }) => {
  return (
    <div
      className='absolute mt-2 z-10 end-0 inline-flex items-center mr-10 lg:w-auto bg-white rounded-lg border border-gray-300 shadow-md flex-col lg:flex-row lg:gap-2 lg:p-2'
      data-tour='edit-sections'
    >
      {isSelected
        ? (
          <button className='flex items-center justify-center gap-2 px-2 w-full rounded-sm text-indigo-700 transition-all hover:bg-indigo-50 active:bg-indigo-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-3.5 sm:py-2' onClick={() => setIsSelected(false)}>
            <HiPencilAlt />
            <span className='font-sans text-body font-medium'>
              Change
            </span>
          </button>
          )
        : (
          <div className='flex'>
            <button className='flex items-center justify-center gap-2 px-2 w-full rounded-sm text-indigo-700 transition-all hover:bg-indigo-50 active:bg-indigo-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-3.5 sm:py-2' onClick={selectNavbar}>
              <HiPencilAlt />
              <span className='font-sans text-body font-medium'>
                Save
              </span>
            </button>
            <button className='flex items-center justify-center gap-2 px-2 w-full rounded-sm text-indigo-700 transition-all hover:bg-indigo-50 active:bg-indigo-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-3.5 sm:py-2' onClick={() => setIsSelected(true)}>
              <MdOutlineCancel />
              <span className='font-sans text-body font-medium'>
                Cancel
              </span>
            </button>
          </div>
          )}
      <div className='border-gray-300 w-full lg:w-auto lg:border-l-1 border-b-1 lg:border-b-0 lg:h-9' />
      <div className='w-full border-b-1 lg:w-auto lg:h-9 lg:border-b-0 lg:border-l-1 border-gray-300' />
      <div className='flex items-center gap-2'>
        <div className='relative'>
          <button className='p-3.5 lg:p-2 rounded-sm text-gray-600 transition-all hover:bg-gray-100 active:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>
            <HiOutlineTrash size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
