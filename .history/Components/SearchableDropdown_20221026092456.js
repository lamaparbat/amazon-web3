import React from 'react'
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai';

const SearchableDropdown = () => {
 return (
  <div className='searchbox flex w-[450px] rounded-sm overflow-hidden cursor-pointer text-dark'>
   <div className='px-3 flex justify-center items-center bg-slate-200 border-r-1'>
    All
    <AiFillCaretDown className='ml-2' />
   </div>
   <input type='search' className='px-3 py-1 h-auto w-full outline-none' />
   <div className='px-3 flex justify-center items-center border-l-1 border-dark bg-amber-500'>
    <AiOutlineSearch className='text-dark' />
   </div>
  </div>
 )
}

export default SearchableDropdown;
