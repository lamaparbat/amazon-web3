import React from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';

const Navbar = () => {
 return (
  <div className='flex '>
   <AiOutlineAmazon />
   <input type='search' className='form-control' />
  </div>
 )
}

export default Navbar;
