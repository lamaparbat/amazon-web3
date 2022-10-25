import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai';

const SearchableDropdown = () => {
 return (
  <div className='searchbox flex'>
   <div className='px-2 flex justify-center items-center bg-white'>
    All
    <AiFillCaretDown className='text-light ml-2' />
   </div>
   <input type='search' className='h-7 w-96' />
  </div>
 )
}

export default SearchableDropdown;
