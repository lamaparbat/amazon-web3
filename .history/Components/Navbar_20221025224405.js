import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import CountrySelect from './CountrySelect';
import SearchableDropdown from './SearchableDropdown';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiCartAlt } from 'react-icons/bi';

const Navbar = () => {
 return (
  <div className='flex py-2 pl-5 pe-2 bg-dark text-light'>
   <AiOutlineAmazon className='text-[30px] text-light ml-5 me-5' />
   <SearchableDropdown />
   <CountrySelect />
   <div className='flex ml-3 w-fit bg-danger items-center'>
    <span>Parbat`s Account</span>
    <AiFillCaretDown className='ml-2' />
   </div>
   <div className='flex ml-3 w-[100px] items-center'>
    <BiCartAlt className='text-xl' />
    <span>10</span>
   </div>
  </div>
 )
}

export default Navbar;
