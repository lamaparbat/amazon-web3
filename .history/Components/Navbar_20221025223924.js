import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import CountrySelect from './CountrySelect';
import SearchableDropdown from './SearchableDropdown';
import { AiFillCaretDown } from 'react-icons/ai'
const Navbar = () => {
 return (
  <div className='flex py-2 pl-5 pe-2 bg-dark text-light'>
   <AiOutlineAmazon className='text-[30px] text-light me-5' />
   <SearchableDropdown />
   <CountrySelect />
   <div className='flex ml-3 w-[200px] items-center'>
    <span>Parbat`s Account</span>
    <AiFillCaretDown className='ml-2' />
   </div>
  </div>
 )
}

export default Navbar;
