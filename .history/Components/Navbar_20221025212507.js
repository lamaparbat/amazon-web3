import React from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import { ReactCountryDropdown } from 'react-country-dropdown';
import 'react-country-dropdown/dist/index.css';
const Navbar = () => {
 const handleSelect = (country) => {
  console.log(country)
  /* returns the details on selected country as an object
   {
        name: "United States of America", 
        code: "US", 
        capital: "Washington, D.C.", 
        region: "Americas", 
        latlng: [38, -97]
      }
  */
 }

 return (
  <div className='flex justify-around items-center '>
   <AiOutlineAmazon />
   <input type='text' className='w-50 border-solid border-2' />
   <ReactCountryDropdown onSelect={handleSelect} countryCode='IN' />
  </div>
 )
}

export default Navbar;
