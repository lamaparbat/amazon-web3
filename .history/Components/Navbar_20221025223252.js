import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import CountrySelect from './CountrySelect';
import SearchableDropdown from './SearchableDropdown';

const Navbar = () => {
 return (
  <div className='flex items-center py-2 pl-5 pe-2 bg-dark text-light'>
   <AiOutlineAmazon className='text-[30px] text-light me-5' />
   <SearchableDropdown />
   <CountrySelect />
   <div className='flex bg-danger'>
    <span>Parbat`s Account</span>
   </div>
  </div>
 )
}

export default Navbar;
