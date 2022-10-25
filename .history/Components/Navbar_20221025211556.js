import React from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';

const Navbar = () => {
 return (
  <div className='flex '>
   <AiOutlineAmazon />
   <input type='search' className='w-0' />
  </div>
 )
}

export default Navbar;
