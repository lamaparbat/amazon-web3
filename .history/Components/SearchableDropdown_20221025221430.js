import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';

const SearchableDropdown = () => {
 return (
  <div className='searchbox'>
   <div>All <AiOutlineDown /></div>
   <input type='search' className='h-7 w-96' />
  </div>
 )
}

export default SearchableDropdown;
