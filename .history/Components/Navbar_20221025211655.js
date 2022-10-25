import React from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';

const Navbar = () => {
 return (
  <div className='flex '>
   <AiOutlineAmazon />
   <input type='text' className='w-50 border-danger' />
  </div>
 )
}

export default Navbar;
