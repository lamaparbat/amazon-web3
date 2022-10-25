import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import CountrySelect from './CountrySelect';
import SearchableDropdown from './SearchableDropdown';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiCartAlt } from 'react-icons/bi';

const Navbar = () => {
 return (
  <div className='flex justify-between h-50 py-2 pl-5 pe-2 bg-dark text-light'>
   <AiOutlineAmazon className='text-4xl bg-danger text-light ml-5 me-5 cursor-pointer' />
   <SearchableDropdown />
   <div className='flex'>
    <CountrySelect />
    <div className='flex ml-3 w-[220px] items-center cursor-pointer'>
     <span>Parbat`s Account</span>
     <AiFillCaretDown className='ml-2' />
    </div>
    <div className='flex ml-3 w-[100px] items-center'>
     <BiCartAlt className='text-2xl cursor-pointer' />
     <span className='position-absolute ml-6 mt-2 text-sm'>10</span>
    </div>
   </div>
  </div>
 )
}

export default Navbar;
