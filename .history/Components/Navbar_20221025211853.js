import React from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';

const Navbar = () => {
 return (
  <div className='column '>
   <AiOutlineAmazon />
   <input type='text' className='w-50 border-solid border-2 border-red' />
  </div>
 )
}

export default Navbar;
