import React, { useState } from 'react';
import { FaEthereum, FaRegHeart, FaHeart } from 'react-icons/fa';

const ItemCard = ({ url, name, price }) => {
 const [loved, setLove] = useState(false);
 return (
  <div className='w-fit h-fit bg-white rounded-sm overflow-hidden mb-3 cursor-pointer hover:drop-shadow-lg'>
   <img
    src={url}
    height='150px'
    width='200px'
   />
   <div className='content p-3'>
    <h5 className='font-mono'>{name}</h5>
    <div className='flex items-center justify-between pr-3'>
     <span className='flex items-center'><FaEthereum />&nbsp; {price} ETH</span>
     {
      loved ? <FaHeart className='text-danger' onClick={() => setLove(!loved)} /> : <FaRegHeart onClick={() => setLove(!loved)} />
     }
    </div>
   </div>
  </div>
 )
}

export default ItemCard;
