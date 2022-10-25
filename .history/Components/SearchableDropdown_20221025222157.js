import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai';

const SearchableDropdown = () => {
 return (
  <div className='searchbox flex rounded rounded-lg'>
   <div className='px-3 flex justify-center items-center bg-slate-200 border-r-1 text-dark'>
    All
    <AiFillCaretDown className='ml-2' />
   </div>
   <input type='search' className='px-3 h-8 w-80 outline-none' />
  </div>
 )
}

export default SearchableDropdown;
