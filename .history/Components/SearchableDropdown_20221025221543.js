import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';

const SearchableDropdown = () => {
 return (
  <div className='searchbox flex'>
   <div className='px-2 flex justify-center items-center bg-danger'>
    All
    <AiOutlineDown className='text-light' />
   </div>
   <input type='search' className='h-7 w-96' />
  </div>
 )
}

export default SearchableDropdown;
