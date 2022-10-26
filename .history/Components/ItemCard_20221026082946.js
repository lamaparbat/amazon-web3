import React from 'react';

const ItemCard = () => {
 return (
  <div className='w-fit h-fit bg-white'>
   <img
    src='https://nftcalendar.io/storage/uploads/events/2022/10/wChmeLoRMI1YXjcZcye9eAmdJyUZnEJYFfBumcQP.jpg'
    height='250px'
    width='250px'
   />
   <div className='content p-2 rounded-full'>
    <h4 className='font-mono'>NFT ITEM1</h4>
    <span>30 ETH</span>
   </div>
  </div>
 )
}

export default ItemCard;
