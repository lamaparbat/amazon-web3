import React, { useState } from 'react';
import { AiOutlineAmazon } from 'react-icons/ai';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const Navbar = () => {
 const [country, setCountry] = useState({ country: null, region: null });

 const selectCountry = (val) => {
  setCountry({ ...country, country: val });
 }

 const selectRegion = (val) => {
  setCountry({ ...country, region: val });
 }

 return (
  <div className='flex justify-around items-center '>
   <AiOutlineAmazon />
   <input type='text' className='w-50 border-solid border-2' />
   <CountryDropdown
    value={country}
    onChange={(val) => setCountry({ ...country, country: val })} />
   <RegionDropdown
    country={country}
    value={region}
    onChange={(val) => setCountry({ ...country, region: val })} />
  </div>
 )
}

export default Navbar;
