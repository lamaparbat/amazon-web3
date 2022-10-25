import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import CountrySelect from './CountrySelect';

const Navbar = () => {
 return (
  <div className='flex items-center py-2 px-5 bg-dark'>
   <AiOutlineAmazon className='text-[30px] text-light me-5' />
   <input type='text' className='border-1 border-dark' />
   <CountrySelect />
  </div>
 )
}

export default Navbar;
