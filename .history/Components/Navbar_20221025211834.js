import React from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';

const Navbar = () => {
 return (
  <div className='flex '>
   <AiOutlineAmazon />
   <input type='text' className='w-50 border-solid border-2 border-blue' />
  </div>
 )
}

export default Navbar;
