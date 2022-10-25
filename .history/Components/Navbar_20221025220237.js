import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import CountrySelect from './CountrySelect';

const Navbar = () => {
 return (
  <div className='flex items-center'>
   <AiOutlineAmazon className='text-xl' />
   <input type='text' className='border-1 border-dark' />
   <CountrySelect />
  </div>
 )
}

export default Navbar;
