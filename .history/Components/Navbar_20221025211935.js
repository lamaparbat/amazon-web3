import React from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';

const Navbar = () => {
 return (
  <div className='flex justify-between items-center '>
   <AiOutlineAmazon />
   <input type='text' className='w-50 border-solid border-2 border-red' />
  </div>
 )
}

export default Navbar;
