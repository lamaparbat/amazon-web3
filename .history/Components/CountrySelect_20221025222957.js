import React from 'react';
import { AiFillFlag } from 'react-icons/ai';

const CountrySelect = () => {
 return (
  <div>
   <select className='px-1 py-0 h-8 w-full rounded-sm ml-1'>
    <option>US</option>
    <option>AUS</option>
    <option>IND</option>
   </select>
  </div>
 )
}

export default CountrySelect;
