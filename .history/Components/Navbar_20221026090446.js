import React, { useState } from 'react';
import { GrAmazon } from 'react-icons/Gr';
import CountrySelect from './CountrySelect';
import SearchableDropdown from './SearchableDropdown';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiCartAlt } from 'react-icons/bi';

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
   <div className='px-3 flex justify-between w-[300px]'>
    <CountrySelect />
    <button className='flex w-[150px] items-center border-1 border-light cursor-pointer'>
     {
      account ? <span>Parbat`s Account</span> : <span>Connect Metamask</span>
     }
    </button>
    <div className='flex items-center'>
     <BiCartAlt className='text-2xl cursor-pointer' />
     <span className='position-absolute ml-6 mt-2 text-sm'>10</span>
    </div>
   </div>
  </div>
 )
}

export default Navbar;
