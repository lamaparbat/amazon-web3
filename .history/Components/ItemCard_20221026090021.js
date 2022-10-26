import React from 'react';
import { FaEthereum } from 'react-icons/fa';

const ItemCard = ({ url, name }) => {
 return (
  <div className='w-fit h-fit bg-white rounded-sm overflow-hidden mb-3'>
   <img
    src={url}
    height='150px'
    width='200px'
   />
   <div className='content p-2'>
    <h4 className='font-mono'>{name}</h4>
    <span className='flex'><FaEthereum /> 30 ETH</span>
   </div>
  </div>
 )
}

export default ItemCard;
