import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai';

const SearchableDropdown = () => {
 return (
  <div className='searchbox flex'>
   <div className='px-3 flex justify-center items-center bg-slate-200 border-r-1 text-dark'>
    All
    <AiFillCaretDown className='ml-2' />
   </div>
   <input type='search' className='h-8 w-95' />
  </div>
 )
}

export default SearchableDropdown;
