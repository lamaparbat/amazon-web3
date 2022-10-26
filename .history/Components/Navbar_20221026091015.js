import React, { useState } from 'react';
import { GrAmazon } from 'react-icons/Gr';
import CountrySelect from './CountrySelect';
import SearchableDropdown from './SearchableDropdown';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
 const [account, setAccount] = useState(null);

 return (
  <div className='flex justify-center h-fit py-2 bg-dark text-light'>
   <div className='w-[100px] flex justify-center items-center'>
    <GrAmazon className='text-3xl position-absolute text-light cursor-pointer' />
   </div>
   <div className='flex w-[180px] items-center cursor-pointer'>
    <span>Select your address</span>
    <AiFillCaretDown className='ml-2' />
   </div>
   <SearchableDropdown />
   <div className='px-4 flex justify-between w-[350px]'>
    <button className='py-0 flex w-[150px] justify-center items-center border border-1 border-ligh rounded-1 cursor-pointer'>
     {
      account ? <span>Parbat`s Account</span> : <span>Connect Metamask</span>
     }
    </button>
    <div className='flex items-center'>
     <BsCart3 className='text-2xl cursor-pointer' />
     <span className='position-absolute ml-7 mt-3 text-sm'>10</span>
    </div>
   </div>
  </div>
 )
}

export default Navbar;
