import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';

const Navbar = () => {

 return (
  <div className='flex justify-around items-center '>
   <AiOutlineAmazon />
   <input type='text' className='w-50 border-solid border-2' />

  </div>
 )
}

export default Navbar;
