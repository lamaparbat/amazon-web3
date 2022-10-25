import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import CountrySelect from './CountrySelect';

const Navbar = () => {
 return (
  <div className='flex items-center '>
   <AiOutlineAmazon className='text-xl' />
   <input type='text' className='w-50 border-solid border-2' />
   <CountrySelect />
  </div>
 )
}

export default Navbar;
