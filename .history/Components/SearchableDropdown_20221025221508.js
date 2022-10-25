import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';

const SearchableDropdown = () => {
 return (
  <div className='searchbox'>
   <div className='flex bg-danger'>
    All
    <AiOutlineDown className='text-light' />
   </div>
   <input type='search' className='h-7 w-96' />
  </div>
 )
}

export default SearchableDropdown;
