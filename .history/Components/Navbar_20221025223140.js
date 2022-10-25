import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import CountrySelect from './CountrySelect';
import SearchableDropdown from './SearchableDropdown';

const Navbar = () => {
 return (
  <div className='flex items-center py-2 px-5 bg-dark'>
   <AiOutlineAmazon className='text-[30px] text-light me-5' />
   <SearchableDropdown />
   <CountrySelect />
   <div>
    <span>Parbat`s Account</span>
   </div>
  </div>
 )
}

export default Navbar;