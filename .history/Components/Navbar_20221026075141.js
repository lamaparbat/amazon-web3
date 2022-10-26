import React, { useState } from 'react';
import { GrAmazon } from 'react-icons/Gr';
import CountrySelect from './CountrySelect';
import SearchableDropdown from './SearchableDropdown';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiCartAlt } from 'react-icons/bi';

const Navbar = () => {
 return (
  <div className='flex justify-between h-fit py-2 pl-5 pe-2 bg-dark text-light'>
   <div className='w-[500px] bg-danger flex justify-center items-center'>
    <GrAmazon className='text-3xl position-absolute text-light cursor-pointer' />
   </div>
   <div className='flex mx-4 w-[500px] items-center cursor-pointer'>
    <span>Select your address</span>
    <AiFillCaretDown className='ml-2' />
   </div>
   <SearchableDropdown />
   <div className='px-3 flex justify-around w-50'>
    <CountrySelect />
    <div className='flex w-[130px] items-center cursor-pointer'>
     <span>Parbat`s Account</span>
     <AiFillCaretDown />
    </div>
    <div className='flex items-center'>
     <BiCartAlt className='text-2xl cursor-pointer' />
     <span className='position-absolute ml-6 mt-2 text-sm'>10</span>
    </div>
   </div>
  </div>
 )
}

export default Navbar;
