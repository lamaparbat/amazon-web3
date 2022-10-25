import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import CountrySelect from "react-country-select";

const Navbar = () => {
 const onSelect = (val) => {
  console.log("values selected are:", val);
  //you can handle options selected here.
 }
 return (
  <div className='flex justify-around items-center '>
   <AiOutlineAmazon />
   <input type='text' className='w-50 border-solid border-2' />
   <CountrySelect multi={true} onSelect={onSelect} />
  </div>
 )
}

export default Navbar;
